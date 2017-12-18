<template>
    <div class="resigster-box">
        <div class="resigster-header">
            <p><i class="icon iconfont icon-xiangzuojiantou"></i></p>
            <p><span>注册会员</span></p>
            <p>
                <router-link to='login'><small>登录</small></router-link>
            </p>
        </div>
        <form action="" class="resigster-form">
            <p>
                <label for="">用户名</label>
                <input type="text" placeholder="请输入你的手机号" v-model='userName'>
            </p>
            <p class="verify">
                <label for="">验证码</label>
                <input type="text" placeholder="请输入验证码" v-model='userYz'>
                <input type="button" value="获取验证码">
            </p>
            <p>
                <label for="">密　码</label>
                <input type="text" placeholder="请输入你的密码" v-model='userPwd'>
            </p>
        </form>
        <div class="resigsterBtn">
            <button type="button" @click='resigsterDo'>确定</button>
        </div>
    </div>
</template>
<script>
    import { setCookie } from '@/utils/utils';
    import {Toast} from '@/../node_modules/mint-ui';
    export default {
        data () {
            return {
                userName: '',
                userPwd: '',
                userYz: ''
            }
        },
        created () {
            
        },
        methods: {
            resigsterDo () {
                if (!this.userName == '' && !this.userYz == '' && !this.userPwd == '') {
                    this.$http_token.post('/main/resigster',{userName: this.userName, userPwd: this.userPwd}).then((result) => {
                        if (result.data.code == '1') {
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
                
            }
        }
    }
</script>
<style scoped>
    .resigster-box {
        width: 100%;
        height: 100%;
        background: #eee;
    }
    .resigster-header {
        width: 92%;
        height: 1rem;
        line-height: 1rem;
        padding: 0 4%;
        background: #fff;
        box-shadow: 0 0 2px #ccc;
        display: -webkit-flex;
        text-align: center;
    }
    .resigster-header p{
        flex: 1;
    }
    .resigster-header p:first-child {
        text-align: left;
    }
    .resigster-header p:last-child {
        text-align: right;
        
    }
    .resigster-header p:last-child small {
        color: #fd4848;
        /* font-size:  */
    }
    /* 注册*/
    .resigster-form {
        width: 100%;
        background: #fff;
        margin-top: .2rem;
    }
    .resigster-form p {
        width: 90%;
        height: 1.1rem;
        margin: 0 5%;
        line-height: 1rem;
        display: -webkit-flex;
        text-align: right;
    }
    .resigster-form p input, .resigster-form p label {
        /* flex: 1; */
    }
    .resigster-form p label {
        width: 17%;
    }
    .resigster-form p input {
        width: 90%;
        height: 90%;
        margin-left: .1rem;
        padding-left: .1rem;
        font-size: .35rem;
        border: none;
        border-bottom: 1px solid #ccc;
    }
    .resigster-form .verify input {
        width: 65%;
    }
    .verify input:last-child{
        width: 1.7rem;
        height: 0.8rem;
        background: #fff;
        margin-top: .15rem;
        color: #666;
        font-size: .3rem;
        border: 1px solid #ccc;
        border-radius: .5rem;
    }
    .resigsterBtn {
        width: 100%;
        height: 1.3rem;
        margin-top: 1rem;
    }
    .resigsterBtn button {
        width: 80%;
        height: 1rem;
        color: #fff;
        background: red;
        font-size: .4rem;
        margin: 0 10%;
        border-radius: .5rem;
        border: none;
    }
    .resigsterBtn p {
        width: 80%;
        margin: .2rem 10%;
        text-decoration: underline;
        text-align: right;
    }
</style>