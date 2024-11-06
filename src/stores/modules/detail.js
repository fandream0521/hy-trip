import { getDetailInfos } from "@/services";
import { defineStore } from "pinia";

const useDetailStore = defineStore("detail", {
    state: () => ({
        detail: {},
    }),
    getters: {
        mainPart(state) {
            return state.detail.mainPart || {};
        }
    },
    actions: {
        async getDetailInfos(houseId) {
            return getDetailInfos(houseId).then((res) => {
                console.log('res:', res);
                this.detail = res.data;
            });
        }
    }
})

export default useDetailStore;