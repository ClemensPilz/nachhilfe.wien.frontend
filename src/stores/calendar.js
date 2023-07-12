
import axios from "axios";
import {ref, computed} from "vue";
import {defineStore} from "pinia";
const url ="http://localhost:8080";

export const useAppointmentStore = defineStore("appointment", () => {
    const confirmedAppointments = ref();
    const pendingAppointments=ref();
    const appointments = ref({});
    const storeAppointmentId = ref();
    const appointmentId = computed(() => storeAppointmentId.value);

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
            // You might want to do more sophisticated error handling
        }

        return confirmedAppointments.value;
    };

    return { appointmentId, pendingAppointments, findAppointmentsByDate, appointments, confirmedAppointments };
});
