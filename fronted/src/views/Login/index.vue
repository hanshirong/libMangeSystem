
<template>
<div class="loginContainer">
    <p class="title">登录</p>
    <el-row >
        <el-col :span="6"> <span class="name">用户名：</span></el-col>
        <el-col :span="18"><el-input placeholder="用户名" v-model="username"></el-input></el-col>
    </el-row>
     <el-row style="margin-top:10px;">
        <el-col :span="6"> <span class="name">密码：</span></el-col>
        <el-col :span="18"><el-input placeholder="密码" v-model="password" show-password></el-input></el-col>
    </el-row>
   
    <el-button type="primary" class="loginBtn" @click="handleLogin" >登录</el-button>
   
</div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        handleLogin(){
            console.log(this.username);
           this.$api.post('/api/account/user',{
               username:this.username,
               password:this.password
           },res=>{
               console.log(res);
           })
        }
    }
}
</script>
<style>
.loginContainer{
    margin-top:10%;
    margin-left: 40%;
    margin-right: 40%;
}
.title{
    text-align: center;
    font-size: 32px;
}
.name{
    margin-top:30px;
    font-size: 24px;
}
.loginBtn{
    margin-top: 20px;
}
</style>