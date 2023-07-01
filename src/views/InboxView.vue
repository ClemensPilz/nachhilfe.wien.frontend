<template>

  <div class="container mx-auto max-w-6xl">
    <NavBar/>

    <div class="grid grid-cols-12 gap-2">

      <!--Left part-->
      <div class="max-h-[calc(100vh-70px)] overflow-y-scroll overflow-x-hidden col-span-3 top-20 noScrollbar">
        <div class="flex flex-col gap-2">
          <ConversationThumb v-for="conversation in conversations"
                             :key="conversation.conversationId"
                             :users="conversation.users"
                             @click="getMessages(conversation.conversationId)"/>
        </div>

      </div>


      <!--Right Part-->
      <!--Messages-->

      <div class="flex flex-col col-span-9 max-h-[calc(100vh-70px)]">

        <div class="overflow-y-scroll overflow-x-hidden noScrollbar">
          <MessageThumb v-for="message in messages"
                        :key="message.messageId"
                        :type="message.messageType"
                        :title="message.title"
                        :content="message.content"
                        :senderId="message.senderId"
                        :start="formatStart(message.start)"
                        :duration="formatDuration(message.start, message.end)"
                        :date="formatDate(message.timeStamp)"/>

          <div id="pageEnd"></div>
        </div>


        <!--Send-Field-->
        <MessageInput :class="conversationId ? 'block' : 'hidden'"
                      @send="postMessage"
                      @keydown.enter="postMessage"
                      button-text="Senden"
                      button-bg="bg-primary">
          <input type="text"
                 name="messageText"
                 id="messageText"
                 placeholder="Is this showing something?"
                 class="w-full border border-lightPrimary p-4"
                 v-model="messageText">
        </MessageInput>

      </div>

    </div>
  </div>

</template>

<script setup>

import NavBar from "@/components/global/NavBar.vue";
import {computed, onBeforeMount, onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
import axios from "axios";
import ConversationThumb from "@/components/Inbox/ConversationThumb.vue";
import MessageThumb from "@/components/Inbox/MessageThumb.vue";
import {useUserStore} from "@/stores/user";
import MessageInput from "@/components/Inbox/MessageInput.vue";
import {useConversationStore} from "@/stores/conversation";

const userStore = useUserStore();
const conversationId = ref(null);
const conversations = ref(null);
const messages = ref(null);
const messageText = ref(null);
const conversationStore = useConversationStore();

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const timeString = date.toTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const today = new Date();
  if (today.getDate() === date.getDate()) {
    return `${timeString.substring(0, 5)}`;
  }

  const dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  return `${dateString}, ${timeString.substring(0, 5)}`;

}


function formatStart(timestamp) {
  if (timestamp == null) {
    return;
  }
  const date = new Date(timestamp);
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  const locale = 'de-DE';

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
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/conversation/user/${userId}`
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
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${userStore.url}/conversation/${id}`
    });
    messages.value = response.data.messages;
    sortMessages();
    conversationId.value = id;
    for (const message in messages) {
      console.log(message)
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
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      method: 'post',
      url: `${userStore.url}/message/send-message/${conversationId.value}`,
      data: {
        "title": "title",
        "content": messageText.value,
        "senderId": userStore.userId
      }
    })

    if (response.status === 201) {
      //reload the conversation
      await getMessages(conversationId.value);
      messageText.value = null;
    }

  } catch (e) {
    console.log(e)
  }
}

//Sort messages Array from latest to oldest
function sortMessages() {
  messages.value.sort((a, b) => {
    const dateA = new Date(a.timeStamp);
    const dateB = new Date(b.timeStamp);
    return dateA - dateB;
  })
}

function scroll() {
  document.getElementById('pageEnd').scrollIntoView();
}

async function initInboxView() {
  try {
    await getConversations(userStore.userId);
    if (conversationStore.getActiveConversationInInbox() !== -1) {
      console.log(conversationStore.getActiveConversationInInbox())
      await getMessages(conversationStore.getActiveConversationInInbox());
    }
  } catch (e) {
    console.log(e)
  }
}

onUpdated(() => {
  scroll();
})

// This function sets up a watcher that listens for a change in the isAuthenticated-variable in userStore. This is
// necessary because initInboxView() will only work once the appropriate user information has been fetched.
onMounted(async () => {
      const unwatch = watch(() => userStore.isAuthenticated, async (newVal) => {
        if (newVal) {
          await initInboxView();
          unwatch();
        }
      }, {immediate: true});
    }
);

onUnmounted(() => {
  conversationStore.setActiveConversationInInbox(conversationId.value);
})

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