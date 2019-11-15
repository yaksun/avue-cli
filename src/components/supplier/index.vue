<template>
    <div>
        <avue-crud 
        :option="option"
         :data="data" 
         :page="page"
          @on-load="onLoad"
           @row-save="addSupplier"
           @row-update="updateSupplier"
         
          ref="curd"
           v-model="obj"
           ></avue-crud>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
      return {
        page: {
          pageSize: 20
        },
        obj:{

        },
        option: {
          //  menuType:'icon',
          border: true,
          index: true,
          expandLevel: 3,
          headerAlign: 'center',
          align: 'center',
            tree: true,
          labelWidth: 100,
          // 删除按钮
          // delBtn:false,
          column: [
              {
                width:130,
                label: '货商编号',
                prop: 'arrange',
            },
            {
                label: '货商门头',
                prop: 'board',
            },
            {
                label: '联系方式',
                prop: 'contact',
            },

           

        
          ]
        },
        data: [
                
            ]
      }
    },
    mounted(){
      this.data = this.supplierInfo
     
    },
       computed:{
       ...mapGetters(['supplierInfo'])
    },
    methods: {
      onLoad(page) {
        //模拟分页
        this.page.total = 40
      },
      addSupplier(row,done){
        console.log(row)
        // var data = {};
        // var arr = Object.keys(data);
        // alert(arr.length == 0); //true 为空， false 不为空
      // var arr = Object.keys(this.obj)
      var arr = Object.keys(row)
        if(arr.length>0){
           this.$store.dispatch('AddSupplier',row).then(
             ()=>{
              //  关闭弹框
               done()
             }
           )

        }
        // console.log(this.obj)
      },
      updateSupplier(row,index,done){
          this.$store.dispatch('UpdateSupplier',{row,index}).then(
             ()=>{
              //  关闭弹框
               done()
             }
           )

           

      }
     
    },

     
    handelDel(row,index){

         this.$confirm(`是否确认删除序号为${row.arrange}`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      })
        .then(() => {
          this.supplierInfo.splice(index, 1);
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
        })
        .catch(() => { });
     
    }
    

}
</script>
<style lang="">
    
</style>