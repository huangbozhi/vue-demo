<template>
  <div>
    <div class="title">图书管理</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部图书" name="first" class="forms">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人:">
            <el-input v-model="formInline.bookName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="作者名称:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="ISBN 号:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="图书分类:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="出版社:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <!-- tables表格 -->
        <el-table style="width: 100%;" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column label="IBSN" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.IBSN }}</span>
            </template>
          </el-table-column>
          <el-table-column label="图书类型" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column label="图书名称" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.bookName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="作者名称" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </template>
          </el-table-column>
          <el-table-column label="出版社" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.publish }}</span>
            </template>
          </el-table-column>
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="总数量" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sum }}</span>
            </template>
          </el-table-column>
          <el-table-column label="在馆数量" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.num }}</span>
            </template>
          </el-table-column>
          <el-table-column label="价格" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.money }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" >
            <template >
              <el-button @click.native="look" class="btn1" size="mini">查看</el-button>
              <el-button @click="borrow" class="btn2" size="mini" type="success" >借阅</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          background=""
          prev-text="上一页"
          next-text="下一页" 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 4, 5]" 
          :page-size="pagesize"         
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">    
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="借阅信息" name="second">
        <!-- 借阅信息 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="图书名称:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="ISBN 号:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="出版社:">
            <el-input v-model="formInline.author" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <!-- tables表格 -->
        <el-table style="width: 100%;" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column label="IBSN" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.IBSN }}</span>
            </template>
          </el-table-column>
          <el-table-column label="图书类型" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column label="图书名称" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.bookName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="作者名称" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </template>
          </el-table-column>
          <el-table-column label="出版社" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.publish }}</span>
            </template>
          </el-table-column>
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="总数量" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sum }}</span>
            </template>
          </el-table-column>
          <el-table-column label="在馆数量" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.num }}</span>
            </template>
          </el-table-column>
          <el-table-column label="价格" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.money }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" >
            <template >
              <el-button @click.native="look" class="btn1" type="success" size="mini">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          background=""
          prev-text="上一页"
          next-text="下一页" 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 4, 5]" 
          :page-size="pagesize"         
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">    
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'management',
  data() {
    return {
      activeName: "first",
      formInline: {
        bookName: "",
        author: "",
        isbn: "",
        bookSort: "",
        publish: "",
      },
      currentPage:1, //初始页
      pagesize:3,    //    每页的数据
      // userList: [],
      tableData: [
        {IBSN : '001',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '002',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '003',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '004',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '005',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '006',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '007',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '008',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '009',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '010',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '011',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        {IBSN : '012',type : '计算机',bookName : 'c++',author : '淘小宝',publish : '某出版社',date: '2016-05-02',sum : 26,num : 8,money: 66,},
        ],
    };
  },
  methods: {
    handleClick(tab, event) {},
     //查看
    look () {
      alert('暂无详细信息')
    },
    //借阅
    borrow () {
      alert('借阅成功');
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
            this.pagesize = size;
            console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage){
            this.currentPage = currentPage;
            console.log(this.currentPage)  //点击第几页
    },
  },

}
</script>

<style scoped>
.title {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
