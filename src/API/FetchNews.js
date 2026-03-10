import $api from "../http";

export default class FetchData {
    static async getNews(limit = 6, page = 1) {
        const res = await $api.get('/news', {
            params: {
                limit,
                page
            }
        });
        return res.data;
    }

    static async getNewsDetail(id) {
        const res = await $api.get('/news/' + id);
        return res.data;
    }

    static async getNewsTags() {
        const res = await $api.get('/tags');
        return res.data;
    }
}