import $api from "../http";

export default class AuthUsers {
    static async registration(email, password, name) {
        const res = await $api.post('/auth/register', {
            email,
            password,
            name
        })

        return res
    }

    static async login(email, password) {
        const res = await $api.post('/auth/login', {
            email,
            password
        })

        return res
    }

    static async logout() {
        const res = await $api.post('/auth/logout')
        return res
    }

    static async refresh() {
        const res = await $api.get('/auth/refresh', {withCredentials: true})
        return res
    }
}