import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();

class HyRequest {
    constructor(baseURL, timeout = TIMEOUT) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use(config => {
            mainStore.isLoading = true;
            return config
        }, err => {
            return err
        })

        this.instance.interceptors.response.use(res => {
            mainStore.isLoading = false;
            return res
        }, err => {
            mainStore.isLoading = false;
            if (err.response && err.response.status === 401) {
                console.log("请求失败，错误码为401");
            }
            return Promise.reject(err)
        })
    }

    request(config) {
        
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config, method: "GET" })
    }

    post(config) {
        return this.request({ ...config, method: "POST" })
    }
}

export default new HyRequest(BASE_URL, TIMEOUT);