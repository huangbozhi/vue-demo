<template>
  <div>
    <div class="title">图书借阅</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="图书名称">
        <el-select v-model="value1" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="借阅/归还">
        <el-radio v-model="radio" label="1">借阅</el-radio>
        <el-radio v-model="radio" label="2">归还</el-radio>
      </el-form-item>
      <el-form-item label="借阅证">
        <el-input class="input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-form-item>
      <el-form-item label="借阅时间">
        <el-date-picker
          v-model="value4"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" :plain="true" @click="open2">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "borrow",
  data() {
    return {
      // 多选框
      options: [
        { value: "选项1", label: "java" },
        { value: "选项2", label: "c++" },
        { value: "选项3", label: "mysql" },
        { value: "选项4", label: "web前端" },
        { value: "选项5", label: "php" }
      ],
      value1: [],
      value2: [],
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
      radio: "1",  // 单选框
      input: "",  // 输入框
      // 日期
      value3: "",
      value4: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
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
</style>