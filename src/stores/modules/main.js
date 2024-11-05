import { ref } from 'vue';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';


const startDate = ref(dayjs());
const endDate = ref(dayjs().add(1, 'day'));

const useMainStore = defineStore("main", {
    state: () => ({
        startDate,
        endDate,
        isLoading: false
    }),
    getters: {
        formattedStartDate() {
            return (format = 'MM月DD日') => {
                return this.startDate.format(format);
            }
        },
        formattedEndDate() {
            return (format = 'MM月DD日') => {
                return this.endDate.format(format);
            }
        },
        diffDays() {
            return this.endDate.diff(this.startDate, 'day');
        }
    }
}) 

export default useMainStore;