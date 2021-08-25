import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "54bd35ae-e7ef-4521-a295-8af92c38dbfd",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}
