<template>
  <div v-if="datasize>0">
    <div>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <el-input placeholder="请输入内容">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="handleAdd()">添加书籍</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-left:100px;"
      border
      height="750"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="bookName" label="书名" width="180"></el-table-column>
      <el-table-column prop="author" label="作者" width="180"></el-table-column>
      <el-table-column prop="pubHouse" label="出版商"></el-table-column>
      <el-table-column prop="ISBN" label="ISBN"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="pubDate" label="出版日期"></el-table-column>
      <el-table-column prop="bookCate" label="类别"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column prop="introduction" label="主题"></el-table-column>
        <el-table-column label="操作" width="230">
        <template slot-scope="props">
          <span @click.stop="editBook(props.row)" >修改</span>
          <span style="color:red" @click.stop="deleteBook(props.row.ISBN)" >删除</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="datasize"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{}],
      datasize: 0
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.address == "上海市普陀区金沙江路 1518 弄") {
        return "warning-row";
      } else if (row.address == "上海市普陀区金沙江路 1516 弄") {
        return "success-row";
      }
      return "";
    },
    handleAdd(){
      this.$router.push({ path: '/book/add' });
    },
    deleteBook(e){
      this.$api.delete("/api/book/off",{
        ISBN:e
      },res=>{
        if(res.data.data=="OK"){
          this.$message({ showClose: true , message: '删除成功' , type: 'success' });
        }

      })
    }
  },
  mounted: function() {
    this.$api.get("/api/book/book", {}, res => {
      this.datasize = res.data.length;
      this.tableData = res.data;
    });
  }
};
</script>
<style>
.block {
  margin-top: 20px;
  float: right;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>