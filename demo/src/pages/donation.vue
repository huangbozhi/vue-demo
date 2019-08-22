<template>
  <div>
    <div class="title">图书捐赠</div>
     <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="图书名称">
        <el-input class="input"
          @blur="msg1"
          size="small"
          placeholder="请输入图书名称"
          v-model="input"
          clearable>
        </el-input>
        <span v-if="isIn1" class="ml10">图书名称不能为空</span>
      </el-form-item>
      <el-form-item label="ISBN">
        <el-input
          @blur="msg2"
          class="input"
          placeholder="图书背面右下角条纹吗处"
          v-model="input2"
          clearable>
        </el-input>
        <span v-if="isIn2" class="ml10">IBSN不能为空</span>
      </el-form-item>

      <el-form-item label="书目类别">
        <el-select v-model="value1" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="捐赠人">
        <el-input
          @blur="msg3"
          class="input"
          placeholder="请输入"
          v-model="input3"
          clearable>
        </el-input>
        <span v-if="isIn3" class="ml10">捐赠人不能为空</span>
      </el-form-item>
      <el-form-item label="捐赠时间">
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="radio">
          <el-radio :label="3">待入库</el-radio>
          <el-radio :label="6">在库</el-radio>
          <el-radio :label="9">外借</el-radio>
          <el-radio :label="12">遗失</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="msg">提醒：若选择“在库”状态的话，请确认已经将图书放置到1-5-10-N的书架上</div>
      <el-form-item>
        <el-button class="btn" :plain="true" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        //提示信息开关
        isIn1: false,
        isIn2: false,
        isIn3: false,
        // 表单
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //输入框
        input : '',
        input2 : '',
        input3 : '',
        // input4 : '',
        // input5 : '',
        // 多选框
        options: [
          {value: '选项1',label: '专业技术'},
          {value: '选项2',label: '专业领域'},
          {value: '选项3',label: '管理沟通'},
          {value: '选项4',label: '其他'},
        ],
        value1: [],
        //日期
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: '',
        //单选框
        radio: 3
      }
    },
    methods :{
      //表单提交
      submit() {
        console.log('-+-+',this.isIn)
        if(this.input && this.input2 && this.input3){
          this.$message({
            message: '提交成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '请填写全部信息',
            type: 'warning'
          })
        }
      },
      msg1(){
        if(this.input == ''){
          this.isIn1 = true;
        } else {
          this.isIn1 = false;
        }
      },
      msg2(){
        if(this.input2 == ''){
          this.isIn2 = true;
        } else {
          this.isIn2 = false;
        }
      },
     msg3(){
        if(this.input3 == ''){
          this.isIn3 = true;
        } else {
          this.isIn3 = false;
        }
      },
    }
  }
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
.msg {
  margin-bottom: 15px;
  color: red;
}
.ml10 {
  margin-left: 10px;
  color: red;
}
</style>