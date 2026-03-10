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
}