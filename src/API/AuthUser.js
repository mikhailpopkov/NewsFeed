import axios from "axios";

export default class AuthUsers {
    static async registration(email, password, name) {
        const data = await axios.post('http://nest.tomfoolery.ru/auth/register', {
            email,
            password,
            name
        })

        return data
    }
}