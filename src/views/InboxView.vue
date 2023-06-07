<template>

  <div class="container mx-auto max-w-6xl">
    <NavBar/>

    <div class="grid grid-cols-12 gap-2">

      <div class="flex flex-col col-span-3">
        <ConversationThumb v-for="conversation in conversations"
                           :users="conversation.users"
                           @click="getMessages(conversation.conversationId)"/>
      </div>


      <div class="flex flex-col col-span-9">
        <div v-if="messages">
          <MessageThumb v-for="message in messages"
                        :key="message.messageId"
                        class="messageContainer"
                        :title="message.title"
                        :content="message.content"
                        :senderId="message.senderId"/>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>

import NavBar from "@/components/global/NavBar.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import ConversationThumb from "@/components/Inbox/ConversationThumb.vue";
import MessageThumb from "@/components/Inbox/MessageThumb.vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
const conversationId = ref(null);
const conversations = ref(null);
const messages = ref(null);

//Gets an array of conversations from API
async function getConversations(userId) {
  try {
    const response = await axios({
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
      method: 'get',
      url: `${userStore.url}/conversation/${id}`
    });
    console.log('--- getMessages ---');
    console.log(response.data.messages);
    messages.value = response.data.messages;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() =>
    getConversations(userStore.user.id)
);

</script>


<style lang="scss" scoped>

</style>