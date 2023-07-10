import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";


export const useAppointmentStore = defineStore("appointment", () => {
        const userStore = useUserStore();
        const foundAppointments = ref();
        const searchDate = ref(null);

        async function showAppointments() {
            console.log("showAppointments");
            try {
                let response = await axios({
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    data: {
                        title: title.value,
                        content: content.value,
                        studentId: studentId.value,
                        start: start.value,
                        end: end.value,
                        confirmed: true
                    },
                    url: `${userStore.url}/appointment/get-appointments`
                });
                foundAppointments.value = response.data.value;
            } catch (e){
                throw e;
            }
            return;
        }

        async function findAppointmentsByDate(date) {
            //input validation
            if (!date) {
                return;
            }

            searchDate.value = date;

            try {
                let response = await axios({
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    data: {
                        date: searchDate.value
                    },
                    url: `${userStore.url}/appointment/get-appointments`
                });
                foundAppointments.value = response.data;
            } catch (e) {
                throw e;
            }
        }

        return {findAppointmentsByDate, foundAppointments, searchDate};
    })
;

