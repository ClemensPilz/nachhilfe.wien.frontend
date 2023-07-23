<template>
  <div class="container mx-auto mt-4 max-w-7xl flex-grow">
    <div v-if="hasNoMessages">
      <h3>Du hast noch keine Nachrichten in deiner Inbox</h3>
    </div>

    <div class="grid grid-cols-12 gap-12">
      <!--Left part-->
      <div
        class="noScrollbar top-20 col-span-3 max-h-[calc(100vh-70px)] overflow-x-hidden overflow-y-scroll"
      >
        <div class="flex flex-col gap-2">
          <ConversationThumb
            v-for="conversation in conversations"
            :key="conversation.conversationId"
            :user="
              conversation.users.filter(
                (user) => user.id !== userStore.user.userId,
              )[0]
            "
            @click="
              () => {
                getMessages(conversation.conversationId);
              }
            "
          />
        </div>
      </div>

      <!--Right Part-->
      <!--Messages-->

      <div class="col-span-9 flex max-h-[calc(100vh-70px)] flex-col">
        <!--@todo: Just pass the whole message-object as a prop-->
        <div class="noScrollbar overflow-x-hidden overflow-y-scroll">
          <MessageThumb
            v-for="message in messages"
            :key="message.id"
            :id="message.id"
            @reload="getMessages(conversationId)"
            :type="message.messageType"
            :title="message.title"
            :content="message.content"
            :senderId="message.senderId"
            :coachingName="message.coachingName"
            :status="message.status"
            :start="formatStart(message.start)"
            :duration="formatDuration(message.start, message.end)"
            :date="formatDate(message.timeStamp)"
          />

          <div id="pageEnd"></div>
        </div>

        <!--Send-Field-->
        <MessageInput
          :class="conversationId ? 'block' : 'hidden'"
          @send="postMessage"
          @go-to-profile="router.push(`/profile/${partnerId}`)"
          @keydown.enter="postMessage"
        >
          <input
            type="text"
            name="messageText"
            id="messageText"
            placeholder="Neue Nachricht senden"
            class="w-full rounded-3xl border border-secondary p-4"
            v-model="messageText"
          />
        </MessageInput>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
  computed,
} from "vue";
import axios from "axios";
import ConversationThumb from "@/components/Inbox/ConversationThumb.vue";
import MessageThumb from "@/components/Inbox/MessageThumb.vue";
import { useUserStore } from "@/stores/user";
import MessageInput from "@/components/Inbox/MessageInput.vue";
import { useConversationStore } from "@/stores/conversation";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const conversationId = ref(null);
const partnerId = ref(null);
const conversations = ref([]);
const messages = ref(null);
const messageText = ref(null);
const conversationStore = useConversationStore();
const hasNoMessages = ref(false);
const myId = computed(() => userStore.user.userId);
const router = useRouter();

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const timeString = date.toTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const today = new Date();
  if (today.getDate() === date.getDate()) {
    return `heute ${timeString.substring(0, 5)}`;
  }

  const dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return `${dateString}, ${timeString.substring(0, 5)}`;
}

function formatStart(timestamp) {
  if (timestamp == null) {
    return;
  }
  const date = new Date(timestamp);
  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const locale = "de-DE";

  const formattedDate = date.toLocaleDateString(locale, dateOptions);
  const formattedTime = date.toLocaleTimeString(locale, timeOptions);

  return `${formattedDate} um ${formattedTime} Uhr`;
}

function formatDuration(start, end) {
  return Math.abs(new Date(start) - new Date(end)) / (60 * 60 * 1000);
}

//Gets an array of conversations from API
async function getConversations(userId) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "get",
      url: `${userStore.url}/conversation/user/${userId}`,
    });
    conversations.value = response.data.conversations;
  } catch (e) {
    console.log(e);
  }
}

//Gets messages of a single conversation from API
async function getMessages(id) {
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "get",
      url: `${userStore.url}/conversation/${id}`,
    });
    messages.value = response.data.messages;
    sortMessages();
    conversationId.value = id;
    partnerId.value = response.data.users.filter(
      (user) => user.id !== userStore.user.userId,
    )[0].id;
    for (const message in messages) {
      console.log(message);
    }
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

//Push message to conversation
async function postMessage() {
  if (messageText.value == null) {
    return;
  }
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "post",
      url: `${userStore.url}/message/send-message/${conversationId.value}`,
      data: {
        title: "title",
        content: messageText.value,
        senderId: userStore.userId,
      },
    });

    if (response.status === 201) {
      //reload the conversation
      await getMessages(conversationId.value);
      messageText.value = null;
    }
  } catch (e) {
    console.log(e);
  }
}

//Sort messages Array from latest to oldest
function sortMessages() {
  messages.value.sort((a, b) => {
    const dateA = new Date(a.timeStamp);
    const dateB = new Date(b.timeStamp);
    return dateA - dateB;
  });
}

function scroll() {
  document.getElementById("pageEnd").scrollIntoView();
}

async function initInboxView() {
  try {
    await getConversations(userStore.userId);
    if (conversationStore.getActiveConversationInInbox() !== -1) {
      await getMessages(conversationStore.getActiveConversationInInbox());
    }
    setTimeout(() => {
      if (conversations.value.length < 1) {
        hasNoMessages.value = true;
      }
    }, 1000);
  } catch (e) {
    console.log(e);
  }
}

onUpdated(() => {
  scroll();
});

// This function sets up a watcher that listens for a change in the isAuthenticated-variable in userStore if the user is not authenticated. This is
// necessary because otherwise initInboxView() wouldn't work on page reload if the user has a valid token but the auth() function has not gone through and set the isAuthenticated-variable yet.

onMounted(async () => {
  const unwatch = watch(
    () => userStore.isAuthenticated,
    async (newVal) => {
      if (newVal) {
        await initInboxView();
        unwatch();
      }
    },
    { immediate: true },
  );
});

onBeforeUnmount(() => {
  conversationStore.setActiveConversationInInbox(conversationId.value);
});
</script>

<style lang="scss" scoped>
.noScrollbar::-webkit-scrollbar {
  display: none;
}

.noScrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
