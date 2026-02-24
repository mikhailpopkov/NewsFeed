import axios from "axios";

export default class FetchData {
    static async getNews() {
        const res = await axios.get('https://nest.tomfoolery.ru/news');
        return res.data;
    }

    static async getNewsDetail(id) {
        const res = await axios.get('https://nest.tomfoolery.ru/news/' + id);
        return res.data;
    }

    static async getNewsTags() {
        const res = await axios.get('https://nest.tomfoolery.ru/tags');
        return res.data;
    }
}