import { defineStore } from "pinia";
import { getHomeSuggests, getCategories, getHomeListByPage } from "@/services";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        homeList: [],
        curPage: 1
    }),

    actions: {
        async fetchAllHomeSuggests() {
            const res = await getHomeSuggests();
            console.log(res.data);
            this.hotSuggests = res.data;
        },
        async fetchCategories() {
            const res = await getCategories();
            console.log(res.data);
            this.categories = res.data;
        },
        async fetchHomeListByPage() {
            const res = await getHomeListByPage(this.curPage);
            this.curPage++;
            console.log(res.data);
            this.homeList.push(...res.data);
        }
    }
})

export default useHomeStore;