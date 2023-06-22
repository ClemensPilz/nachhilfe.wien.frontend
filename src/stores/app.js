import { ref, } from 'vue'
import { defineStore } from 'pinia'
import {useConversationStore} from "@/stores/conversation";
import {useUserStore} from "@/stores/user";
import axios from "axios";
import router from "@/router";
export const useAppStore = defineStore('app', () => {

    const conversationStore = useConversationStore();
    const userStore = useUserStore();
    const subjects = ref({});
    const levels = ["VOLKSSCHULE", "MITTELSCHULE"]

    async function sendMessage(recipientId) {
        try {
            const response = await axios({
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                method: "post",
                url: `${userStore.url}/conversation/create-conversation/${userStore.userId}/${recipientId}`,
            });
            const conversationStore = useConversationStore();
            conversationStore.activeConversationInInbox = response.data.conversationId;
            await router.push("/inbox");
        } catch (e) {
            console.log(e);
        }
    }


    return { sendMessage, subjects, levels }
})
