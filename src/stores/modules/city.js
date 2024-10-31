import { getAllCity } from "@/services";
import { defineStore } from "pinia";


const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {}
    }),

    getters: {
        getGroupList: (state) => {
            return (key) => {
                return state.allCities?.[key].cities.map(city => city.group);
            }
        }
    },


    actions: {
        async fetchAllCities() {
            const response = await getAllCity();
            this.allCities = response.data;
        }
    }
})

export default useCityStore;