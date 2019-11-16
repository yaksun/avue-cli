<template>
    <div>
        <avue-crud :option="option" 
        :data="data" 
        :page="page" 
        @on-load="onLoad" 
        v-model="obj"
         @row-save="addGoods"
          @row-update="updateGoods"
         @row-del="handelDel"
         >
         
          <template slot-scope="scope" slot="goods_supplierForm">
            <SupplierList />
         </template>


         </avue-crud>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import SupplierList from '../supplierList'
export default {
    data() {
      return {
        page: {
          pageSize: 20
        },
        data:[],
        obj:{},
       
        option: {
           menuType:'icon',
          border: true,
          index: true,
          expandLevel: 3,
          headerAlign: 'center',
          align: 'center',
            tree: true,
          labelWidth: 100,
          column: [
              {
                width:130,
                label: '商品名称',
                prop: 'goods_name',
            },
            {
                label: '货号',
                prop: 'goods_number',
            },
            {
                label: '颜色',
                prop: 'goods_color',
            },
            {
                label: '尺码',
                prop: 'goods_size',
            },
            {
              label:'供应商',
              prop:'goods_supplier',
              formslot:true
            
            }

           

        
          ]
        },
        
      }
    },
    components:{
      SupplierList
    },
    mounted(){
       this.data = this.goodsInfo
      

    },
       computed:{
       ...mapGetters(['goodsInfo','supplierInfo'])
    },
    methods: {
      onLoad(page) {
        //模拟分页
        this.page.total = 40
      },
       addGoods(row,done){
        console.log(row)
      
      var arr = Object.keys(row)
        if(arr.length>0){
           this.$store.dispatch('AddGoods',row).then(
             ()=>{
                this.$message({
                showClose: true,
                message: "添加成功",
                type: "success"
              });
              //  关闭弹框
               done()
             }
           )

        }
        // console.log(this.obj)
      },
      updateGoods(row,index,done){
          this.$store.dispatch('UpdateGoods',{row,index}).then(
             ()=>{
                this.$message({
                showClose: true,
                message: "更新成功",
                type: "success"
              });
              //  关闭弹框
               done()
             }
           )

           

      },
	   handelDel(row,index){

         this.$confirm(`是否确认删除商品${row.goods_name}${row.goods_number}`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      })
        .then(() => {

          this.$store.dispatch('DelGoods',index)
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
        })
        .catch(() => { });
     
    }
    }
}
</script>
<style lang="">
    
</style>