import { ref, } from 'vue'
import { defineStore } from 'pinia'
export const useConversationStore = defineStore('conversation', () => {

    const activeConversationInInbox = ref();

    function setActiveConversationInInbox(id) {
        activeConversationInInbox.value = id;
    }

    function getActiveConversationInInbox() {
        if(activeConversationInInbox.value) {
            return activeConversationInInbox.value;
        } else {
            return -1;
        }
    }

    return { setActiveConversationInInbox, getActiveConversationInInbox, activeConversationInInbox }
})
