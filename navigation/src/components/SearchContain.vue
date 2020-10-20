<template>
  <div class="backtop">
    <el-tooltip class="item" effect="dark" content="搜索" placement="left-start">
      <el-button @click.capture="tableSearch">
        <i class="el-icon-search"></i>
      </el-button>
    </el-tooltip>
    <el-dialog
      title="本地搜索引擎"
      append-to-body
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      :before-close="handleClose">
        <el-input
          class="inline-input"
          v-model="state1"
          placeholder="请输入内容"
          clearable
        ></el-input>
        <div class="searchMain" v-if="list.length>0">
          <ul>
            <li v-for="(item,index) in list" :key="index" class="box">
              <NavItem :data="item" :key="'sub-'+index"/>
            </li>
          </ul>
        </div>
        <div v-else class="nodata">
          查询不到 "{{state1}}" ，请使用以下搜索引擎继续查找
          <div class="searchMain">
            <ul>
              <li v-for="(item,index) in SearchEnginesList" :key="index" class="box">
                <NavItem :data="item" :key="'sub-'+index"/>
              </li>
            </ul>
          </div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
  props:{
    data:{
      type:Array,
      default:()=> []
    }
  },
  components:{
    NavItem,
  },
  data(){
    return {
      dialogVisible: false,
      restaurants:[],
      state1: '',
    }
  },
  computed:{
    newData(){
      if(this.data.length > 0){
        var arr = [];
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          arr.push(...element.sites)
        };
        return arr;
      }else{
        return [];
      }
    },
    list(){
      if(this.newData.length === 0) return [];
      if(this.state1 == ""){
        return [
          this.newData[Math.floor((Math.random()*this.newData.length))],
          this.newData[Math.floor((Math.random()*this.newData.length))],
          this.newData[Math.floor((Math.random()*this.newData.length))],
          this.newData[Math.floor((Math.random()*this.newData.length))]
        ]
      }else{
        return this.newData.filter((item)=>{
          if(item.name.indexOf(this.state1) > -1 || item.desc.indexOf(this.state1) > -1){
            return true;
          }else{
            return false;
          }
        });
      };
    },
    SearchEnginesList(){
      return [{
        "name": "百度搜索",
        "href": "https://www.baidu.com/s?ie=UTF-8&wd="+this.state1,
        "desc": "百度搜索-有毒的搜索引擎",
        "logo": "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
      },{
        "name": "谷歌搜索",
        "href": "http://www.google.com/",
        "desc": "谷歌搜索-出国",
        "logo": "https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1962752068.png"
      }];
    }
  },
  methods: {
    tableSearch() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.state1 = "";
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button{
  padding:12px 13px;
}
.el-button,
.backtop {
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: #fff;
  right: 10px;
  top: 60px;
  z-index: 9999;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
[class^=el-icon-] {
  font-size: 20px;
}
</style>

