import axios from "axios";

export default class FetchData {
    static async getNews() {
        const res = await axios.get('https://nest.tomfoolery.ru/news');
        return res.data;
    }
}