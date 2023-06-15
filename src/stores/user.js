import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useRouter} from "vue-router";
import axios from "axios";

export const useUserStore = defineStore('user', () => {

    const url = 'http://localhost:8080'
    const router = useRouter();
    const user = ref({});
    const userId = computed(() => {
        return user.value.id;
    })

    async function tokenAuth(token) {

    }

//Saves userId to localStorage, userinfos to store and returns 1 if successful, -1 if not
    async function auth(credentials) {
        let axiosConfig;

        if (credentials.email) {
            axiosConfig = {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'post',
                url: `${url}/auth`,
                data: {
                    "email": credentials.email,
                    "password": credentials.password
                }
            }

        } else if (credentials.token) {
          axiosConfig = {
            headers: {
              'Authorization': "Bearer " + credentials.token
            },
            method: 'post',
            url: `${url}/auth/getAuth`
          }
        }

        else {
            return {status: -1, error: 'Insufficient credentials'};
        }

        try {
            const response = await axios(axiosConfig);
            if (response.status === 200) {
                console.log(response.data);
                user.value = response.data;
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("userId", response.data.userId);
                return {status: 1, data: response.data};

            } else {
                return {status: -1, error: 'Unexpected response status'};
            }

        } catch (e) {
            console.error(e);
            return {status: -1, error: e};
        }
    }


    return {userId, user, url, auth}
})
