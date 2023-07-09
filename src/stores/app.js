import {ref,} from 'vue'
import {defineStore} from 'pinia'
import {useConversationStore} from "@/stores/conversation";
import {useUserStore} from "@/stores/user";
import axios from "axios";
import router from "@/router";
import {start} from "@popperjs/core";

export const useAppStore = defineStore('app', () => {

    const userStore = useUserStore();
    const subjects = ref({});
    const levels = ["VOLKSSCHULE", "MITTELSCHULE"];
    const selectedCoaching = ref({});
    const modalStack = ref([]);

    function pushModal(modal) {
     modalStack.value.push(modal);
     console.log(modalStack.value)
    }

    function popModal() {
        modalStack.value.pop();
    }
    function selectCoaching(teacherId, coachingId) {
        selectedCoaching.value = {teacherId, coachingId}
    }

    //Gets conversation from API. If isPushing is true, will push router to InboxView.vue
    async function sendMessage(recipientId, isPushing) {
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
            if (isPushing) {
                await router.push("/inbox");
            } else {
                return response.data.conversationId;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function postAppointment(teacherId, coachingId, dateTime, duration, content) {
        const conversationId = await sendMessage(teacherId, false);
        let startTime = new Date(dateTime);
        let endTime = new Date(dateTime);
        endTime.setHours(startTime.getHours() + duration);
        console.log(endTime)

        try {
            const response = await axios({
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                method: 'post',
                url: `${userStore.url}/appointment/send-appointment/${conversationId}/${coachingId}`,
                data: {
                    title: 'neuer Terminvorschlag',
                    content: content,
                    start: startTime.toISOString(),
                    end: endTime.toISOString()
                }
            })
            console.log(response.data);
        } catch (e) {
            throw(e);
        }
    }

    function encodeImage(file) {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result);
            reader.onerror = rej;
            reader.readAsDataURL(file);
        })
    }

    return {sendMessage, encodeImage, postAppointment, subjects, levels, selectedCoaching, modalStack, selectCoaching, pushModal, popModal}
})
