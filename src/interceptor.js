import axios from 'axios'

export default function(vm) {
    //设置请求拦截器
    axios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = "Bearer "+token
        }
        return config
    })

    //设置响应拦截器，统一处理401，清理token跳转login页面
    axios.interceptors.response.use(null, error => {
        if (error.response.status===401) {
            vm.$store.dispatch("logout")
            vm.$router.replace({path: 'login'})
        }
        return Promise.reject(error)
    })
}