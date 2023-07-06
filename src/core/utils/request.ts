import axios from "axios"

const API_BASE_URL = "https://api.github.com"

export const makeRequest = (user: string) => {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/users/${user}`,
    });
}