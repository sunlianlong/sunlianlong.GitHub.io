
<template>
  <section class="index container">
    <div class="left-bar" :style="{left: isLeftbar ? 0 : '-249px'}">
      <div class="title">
        <img class="icon-logo" src="/favicon.ico">
        <span>导航</span>
      </div>
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            background-color="#30333c"
            text-color="#6b7386"
            active-text-color="#fff"
          >
            <el-submenu :index="item.name" v-for="(item,index) in newDataList" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item :index="nav._id" v-for="(nav,idx) in item.data" :key="idx">
                <a :href="`#${nav.classify}`">
                  <i :class="nav.icon"></i>
                  <span slot="title">{{nav.classify}}</span>
                </a>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <section class="main">
      <div id="mainContent">
        <!-- 手机端菜单 -->
        <div id="menu-box">
          <div id="menu">
            <input type="checkbox" id="menu-form">
            <label for="menu-form" class="menu-spin" @click="isLeftbar=!isLeftbar">
              <div class="line diagonal line-1"></div>
              <div class="line horizontal"></div>
              <div class="line diagonal line-2"></div>
            </label>
          </div>
        </div>
        <!-- 开发社区 -->
        <div class="box" v-for="(item,index) in data" :key="index" :ref="`box-${index}`">
          <a :id="`#${item.classify}`" :name="item.classify"></a>
          <div class="sub-category">
            <div>
              <i :class="item.icon" class="icon"></i>
              {{item.classify}}
            </div>
          </div>
          <NavItem :data="sub" v-for="(sub,idx) in item.sites" :key="'sub-'+idx"/>
        </div>
      </div>
      <footer class="footer">
        <div class="copyright">
          <div>
            Copyright © 2019- 2050
            <a href="https://sunlianlong.com">孙连龙博客</a>
            &nbsp;&nbsp;&nbsp;
            <a target="_blank" href="http://chuangzaoshi.com/">创造师导航</a>
          </div>
        </div>
      </footer>
      <back-top/>
      <SearchContain :data="data"/>
    </section>
  </section>
</template>

<script>
import BackTop from "@/components/BackTop";
import NavItem from "@/components/NavItem";
import SearchContain from "@/components/SearchContain"
export default {
  data() {
    return {
      active: "0",
      data: [],
      scroll: 0,
      selfIndex: 0,
      isLeftbar: true
    };
  },
  components: {
    BackTop,
    NavItem,
    SearchContain
  },
  computed: {
    newDataList() {
      const arr = [];
      let product = {};
      let operation = {};
      let design = {};
      let web = {};
      let site = {};
      // 产品
      product.name = "产品";
      product.icon = "csz czs-circle";
      product.data = this.data.filter(
        item => item.classify.indexOf("［产品］") != -1
      );
      arr.push(product);
      // 运营
      operation.name = "运营";
      operation.icon = "csz czs-square";
      operation.data = this.data.filter(
        item => item.classify.indexOf("［运营］") != -1
      );
      arr.push(operation);
      // 设计
      design.name = "设计";
      design.icon = "csz czs-triangle";
      design.data = this.data.filter(
        item => item.classify.indexOf("［设计］") != -1
      );
      arr.push(design);
      // 前端
      web.name = "前端";
      web.icon = "csz czs-camber";

      web.data = this.data.filter(
        item => item.classify.indexOf("［前端］") != -1
      );
      arr.push(web);
      
      // 建站
      site.name = "建站";
      site.icon = "csz czs-camber";
      site.data = this.data.filter(
        item => item.classify.indexOf("建站") != -1
      );
      arr.push(site);
      
      return arr;
    }
  },
  watch: {
    active() {
      const leftBarTop = document.querySelector(".left-bar").scrollTop;
      const num = this.active;
      const length = this.data.length;
      if (num >= 10 && num <= length) {
        document.querySelector(".left-bar").scrollTop = leftBarTop + 60;
      }
      if (num < 10 && num >= 0) {
        document.querySelector(".left-bar").scrollTop = leftBarTop - 60;
      }
    }
  },
  methods: {
    jump(idx) {
      this.selfIndex = idx;

      // 跳转
      let allSite = document.querySelectorAll(".box");
      let selfOffsetTop = allSite[idx].offsetTop - 10;
      // 判断是否是在手机上
      window.screenWidth = document.body.clientWidth;
      if (window.screenWidth < 481) {
        selfOffsetTop -= 50;
      }
      // Chrome
      document.body.scrollTop = selfOffsetTop;
      // Firefox
      document.documentElement.scrollTop = selfOffsetTop;
      // Safari
      window.pageYOffset = selfOffsetTop;
    },

    async getData() {
      const res = await this.$http.get("./nav.json");
      this.data = res.data;
    },
    dataScroll() {
      const that = this;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let allSite = document.querySelectorAll(".box");
      for (let i = 0; i < allSite.length; i++) {
        if (scrollTop >= allSite[i].offsetTop) {
          that.selfIndex = i;
        }
      }
    },
    handleScroll() {
      const that = this;
      const length = that.data.length;
      const content = document.querySelectorAll(".box");
      const top = document.body.scrollTop || document.documentElement.scrollTop;
      for (let i = length - 1; i >= 0; i--) {
        if (top >= content[i].offsetTop - 20) {
          that.active = i.toString();
          break;
        }
      }
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    const that = this;
    this.getData();
    // window.addEventListener('scroll', this.dataScroll);
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        if (window.screenWidth < 481) {
          that.isLeftbar = false;
        } else {
          that.isLeftbar = true;
        }
      })();
    };
    window.onresize();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-dialog {
  min-width: 320px;
}
.el-submenu .el-menu-item {
  padding: 0;
}
.el-menu-item > a {
  color: rgb(107, 115, 134);
  display: block;
  width:100%;
  height: 100%;
}
.el-menu-item.is-active > a {
  color:#fff;
}
.csz {
  margin-right: 5px;
}
</style>
