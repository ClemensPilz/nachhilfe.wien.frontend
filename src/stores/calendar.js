import { defineStore } from "pinia";
import axios from "axios";
import {ref} from "vue";
const url ="http://localhost:8080";

export const useAppointmentStore = defineStore("appointment", () => {
    const confirmedAppointments = ref();

    const findAppointmentsByDate = async (date) => {
        try {
            let response = await axios({
                method: 'post',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                data: {
                    date,
                },
                url: `${url}/appointment/get-appointments`,
            });

            confirmedAppointments.value = response.data.appointments;
        } catch (e) {
            console.error(e);
            throw (e);
            // You might want to do more sophisticated error handling
        }

        return confirmedAppointments.value;
    };

    return { findAppointmentsByDate };
});
