<template>
  <div>
    <div class="title">图书推荐</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="图书名称">
        <el-input class="input" size="small" placeholder="请输入图书名称" v-model="input" clearable></el-input>
        <span v-if="!input" class="ml10">图书名称不能为空</span>
      </el-form-item>
      <el-form-item label="出版社">
        <el-input class="input" placeholder="图书出版社" v-model="input2" clearable></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input class="input" placeholder="图书作者" v-model="input3" clearable></el-input>
      </el-form-item>
      <el-form-item label="参考价格">
        <el-input class="input" placeholder="请输入数字" v-model="input4" clearable></el-input>
      </el-form-item>
      <el-form-item label="书目类别">
        <el-select v-model="value1" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="推荐人">
        <el-input class="input" placeholder="请输入数字" v-model="input5" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" :plain="true" @click="open2">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      //输入框
      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      // 多选框
      options: [
        { value: "选项1", label: "专业技术" },
        { value: "选项2", label: "专业领域" },
        { value: "选项3", label: "管理沟通" },
        { value: "选项4", label: "其他" }
      ],
      value1: []
    };
  },
  methods: {
    //表单提交
    open2() {
      this.$message({
        message: "提交成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 18px;
  margin-bottom: 15px;
}
.btn {
  background-color: #3080fe;
  color: #fff;
}
.input {
  width: 360px;
}
.ml10 {
  margin-left: 10px;
  color: red;
}
</style>