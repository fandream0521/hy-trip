import { defineStore } from "pinia";
import { getHomeSuggests, getCategories } from "@/services";
const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
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
        }
    }
})

export default useHomeStore;