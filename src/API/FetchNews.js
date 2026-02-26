import axios from "axios";

export default class FetchData {
    static async getNews(limit = 6, page = 1) {
        const res = await axios.get('https://nest.tomfoolery.ru/news', {
            params: {
                limit,
                page
            }
        });
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