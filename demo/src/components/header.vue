<template>
  <div class="header">
    <h1 class="left">图书管理系统</h1>
    <div class="right">
      <ul class="pointer">
        <li class="item">反馈</li>
        <li class="item">帮助</li>
      </ul>
      <div class="info pointer">
        <img src="../assets/mine.png" alt="">
        <span>s{{username}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  },
  computed: {
    username() {
      return localStorage.getItem('username')
    }
  }
}
</script>

<style scoped>
.header{
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  padding: 0 20px 0 20px;
  background-color: #3080fe;
}
.left{
  float: left;
  color: #ffffff;
  width: 144px;
  height: 36px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 24px;
}
.right{
  float: right;
  display: flex;
  width: 388px;
  height: 44px;
}
.right ul{
  float: right;
  width: 282px;
  height: 44px;
  padding-top: 10px;
  text-align: center;
}
.item{
  display: inline-block;
  list-style: none;
  box-sizing: border-box;
  width: 88px;
  height: 44px;
  padding: 0 20px;
  color: #ffffff;
  font-size: 14px;
  line-height: 3;
}
.info{
  float: right;
  position: relative;
  /* display: inline-block; */
  /* display: flex; */
  right: 90px;
  margin-right: 20px;
  width: 96px;
  height: 44px;
  padding: 10px 0 10px 0;
}
.info img{
  width: 40px;
  height: 40px;
}
.info span{
  display: inline-block;
  width: 48px;
  height: 15px;
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  margin-top: 12px;
  margin-left: 10px;
}
.pointer{
  cursor: pointer;
}
</style>