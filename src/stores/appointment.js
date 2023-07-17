import axios from "axios";
import {ref, computed} from "vue";
import {defineStore} from "pinia";
import {useUserStore} from "@/stores/user";


export const useAppointmentStore = defineStore("appointment", () => {
    const userStore = useUserStore();
    const url = computed(() => userStore.url)
    const confirmedAppointments = ref();
    const pendingAppointments = ref();
    const appointments = ref({});
    const storeAppointmentId = ref();
    const appointmentId = computed(() => storeAppointmentId.value);
    const selectedDate = ref();

    const findAppointmentsByDate = async (date) => {
        try {
            let response = await axios({
                method: 'get',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                url: `${url}/appointment/get-appointments-date/${date}`,
            });
            console.log(response);
            confirmedAppointments.value = response.data.appointments;
            pendingAppointments.value = response.data.appointments;
        } catch (e) {
            console.error(e);
            throw (e);
        }

        return confirmedAppointments.value;
    };

    return {
        appointmentId,
        pendingAppointments,
        findAppointmentsByDate,
        appointments,
        confirmedAppointments,
        selectedDate
    };
});
