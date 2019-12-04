<template>
    <div>
        <div class="create-form">
            名称：<el-input v-model="bookName"></el-input>
            作者：<el-input v-model="author"></el-input>
            定价：<el-input v-model="price"></el-input>
            ISBN：<el-input v-model="ISBN"></el-input>
            出版社：<el-input v-model="pubHouse"></el-input>
            出版日期：<el-input v-model="pubDate"></el-input>
            图书类别：<el-input v-model="bookCate"></el-input>
            简介：<el-input v-model="introduction"></el-input>
        </div>
        <el-button @click="handleAdd()">添加</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bookName:'',
            author:'',
            price:'',
            ISBN:'',
            pubHouse:'',
            pubDate:'',
            bookCate:'',
            introduction:''
        }
    },
    methods:{
        handleAdd(){
            this.$api.post("/api/book/add",{
                bookName:this.bookName,
                author:this.author,
                price:this.price,
                ISBN:this.ISBN,
                pubHouse:this.pubHouse,
                pubDate:this.pubDate,
                bookCate:this.bookCate,
                introduction:this.introduction
            },res=>{
                console.log(res);
                if(res.data.data=="OK"){
                     this.$message({ showClose: true , message: '添加成功' , type: 'success' });
                }
            })
        }
    }
}
</script>
<style>

</style>