<template>

  <div class="container mx-auto max-w-6xl">
    <NavBar/>

    <div class="grid grid-cols-12 gap-2">

      <!--Left part-->
      <div class="sticky h-fit col-span-3 top-20">
        <div class="flex flex-col">
          <ConversationThumb v-for="conversation in conversations"
                             :key="conversation.conversationId"
                             :users="conversation.users"
                             @click="getMessages(conversation.conversationId)"/>
        </div>

      </div>


      <!--Right Part-->
      <!--Messages-->
      <div class="flex flex-col col-span-9">
        <div v-if="messages">
          <MessageThumb v-for="message in messages"
                        :key="message.messageId"
                        class="messageContainer"
                        :title="message.title"
                        :content="message.content"
                        :senderId="message.senderId"
                        :date="message.timeStamp"/>
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
import {onBeforeMount, onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
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
const messageText = ref('');
const conversationStore = useConversationStore();


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

// onUpdated(() => {
//   scroll();
// })

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

</style>