<template>
    <div class="login-box">
        <div class="login-header">
            <p><i class="icon iconfont icon-xiangzuojiantou" @click='goback'></i></p>
            <p><span>会员登录</span></p>
            <p>
                <router-link to='resigster'><small>注册</small></router-link>
            </p>
        </div>
        <form action="" class="login-form">
            <p>
                <label for="">用户名</label>
                <input type="text" placeholder="请输入你的手机号" v-model='userName'>
            </p>
            <p>
                <label for="">密　码</label>
                <input type="text" placeholder="请输入你的密码" v-model='userPwd'>
            </p>
        </form>
        <div class="loginBtn">
            <button type="button" @click='loginDo'>立即登录</button>
            <p>忘记密码?</p>
        </div>
    </div>
</template>
<script>
    import { setCookie } from '@/utils/utils';
    import {Toast} from 'mint-ui';
    export default {
        data () {
            return {
                userName: '',
                userPwd: ''
            }
        },
        created () {
            
        },
        methods: {
            loginDo () {
                if (!this.userName == '' && !this.userPwd == '') {
                    this.$http_token.post('/main/login',{userName: this.userName, userPwd: this.userPwd}).then((result) => {
                        if (result.data.code == '1') {
                            setCookie ('token', result.data.token);
                            this.$router.push({name: 'main'})
                        } else {
                            this.$message(result.data.message)
                            /*Toast({
                                message: result.data.message,
                                position: 'middle',
                                duration: 2000
                            });*/
                        }
                    })
                } else {
                    this.$message('请输入账号')
                }
            },
            goback () {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .login-box {
        width: 100%;
        height: 100%;
        background: #eee;
    }
    .login-header {
        width: 92%;
        height: 1rem;
        line-height: 1rem;
        padding: 0 4%;
        background: #fff;
        box-shadow: 0 0 2px #ccc;
        display: -webkit-flex;
        text-align: center;
    }
    .login-header p{
        flex: 1;
    }
    .login-header p:first-child {
        text-align: left;
    }
    .login-header p:last-child {
        text-align: right;
        
    }
    .login-header p:last-child small {
        color: #fd4848;
        /* font-size:  */
    }
    /* 登录*/
    .login-form {
        width: 100%;
        background: #fff;
        margin-top: .2rem;
    }
    .login-form p {
        width: 90%;
        height: 1.1rem;
        margin: 0 5%;
        line-height: 1rem;
        display: -webkit-flex;
        text-align: right;
    }
    .login-form p input, .login-form p label {
        /* flex: 1; */
    }
    .login-form p label {
        width: 17%;
    }
    .login-form p input {
        width: 90%;
        height: 90%;
        margin-left: .1rem;
        padding-left: .1rem;
        font-size: .35rem;
        border: none;
        border-bottom: 1px solid #ccc;
    }
    .loginBtn {
        width: 100%;
        height: 1.3rem;
        margin-top: 1rem;
    }
    .loginBtn button {
        width: 80%;
        height: 1rem;
        color: #fff;
        background: red;
        font-size: .4rem;
        margin: 0 10%;
        border-radius: .5rem;
        border: none;
    }
    .loginBtn p {
        width: 80%;
        margin: .2rem 10%;
        text-decoration: underline;
        text-align: right;
    }
</style>