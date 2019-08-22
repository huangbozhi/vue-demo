<template>
  <div class="home">
    <el-container class="left">
      <el-aside class="leftAside">
        <div class="logo">LOGO</div>
        <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:900px">
          <el-menu-item index="1" @click="selectTo('/management')">
            <i class="el-icon-s-home"></i>图书管理
          </el-menu-item>
          <el-menu-item index="2" @click="selectTo('/borrow')">
            <i class="el-icon-menu"></i>图书借阅
          </el-menu-item>
          <el-menu-item index="3" @click="selectTo('/recommend')">
            <i class="el-icon-s-custom"></i>图书推荐
          </el-menu-item>
          <el-menu-item index="4" @click="selectTo('/donation')">
            <i class="el-icon-s-management"></i>图书捐赠
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="header">
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/header'
export default {
  name: "home",
  components: {
    Header
  },
  methods: {
    selectTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
.left{
  position: relative;
  height: 550px;
  border: 1px solid #eee;
}
.leftAside{
  width: 260px;
  background-color: rgb(238, 241, 246);
}
.header{
  position: relative;
  width: 100%;
  text-align: right;
  font-size: 12px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3080fe;
  font-weight: 700;
  font-size: 36px;
  height: 60px;
}
</style>