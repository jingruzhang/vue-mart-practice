<template>
    <div>
        <cube-form
        :model="model"
        :schema="schema"
        @submit="handleLogin"
        @validate="handleValidate"
        >
        </cube-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                },
                schema: {
                    //表单结构定义
                    fields: [
                        {
                            type: 'input',
                            modelKey: 'username',
                            label: 'Username',
                            props: {
                                placeholder: 'Please enter your username'
                            },
                            rules: {
                                //校验规则
                                required: true
                            },
                            trigger: 'blur'
                        },
                        {
                            type: 'input',
                            modelKey: 'password',
                            label: 'Password',
                            props: {
                                type: 'password',
                                placeholder: 'Please enter your password',
                                eye: {
                                    open: true
                                }
                            },
                            rules: {
                                //校验规则
                                required: true
                            },
                            trigger: 'blur'                            
                        },
                        {
                            type: 'submit',
                            label: 'Login'
                        }
                    ]
                }
            }
        },
        methods: {
            handleLogin(e) {
                //阻止表单自动提交行为
                e.preventDefault()
                //登陆请求
                this.$store.dispatch('login', this.model)
                .then(code => {
                    if (code) {
                        //登陆成功重定向
                        const path = this.$route.query.redirect || '/'
                        this.$router.push(path)
                    }
                }).catch(error => {
                    const toast = this.$createToast({
                        time: 2000,
                        txt: error.message|| error.response.data.message || "登录失败",
                        type: error
                    })
                    toast.show()
                })
            },
            handleValidate(result) {
                console.log(result)
            }
        },
    }
</script>

<style scoped>

</style>