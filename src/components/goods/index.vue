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
          @selection-change="selectionChange"
         ref="crud"
         >
              
             <template slot="menuLeft" >
              <el-button type="primary" size="small"  @click.stop="handleAdd()" >新增</el-button>
            </template>
            <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handleEdit()">编辑</el-button>
            </template>
            <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handelDelete()">删除</el-button>
            </template>
          <template slot-scope="scope" slot="supplierForm">
            <SupplierList :row="rowData"/>
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
         rowData:[],
        obj:{},
       
        option: {
           menuType:'icon',
          border: true,
            // 隐藏原生添加按钮
           addBtn:false,
          index: true,
              // 隐藏操作栏
          menu:false,
         //隐藏表格上面的提示
         tip:false,
         columnBtn:false,
         refreshBtn:false,
          // 隐藏原生添加按钮
          selection:true,
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
              prop:'supplier',
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
       ...mapGetters(['goodsInfo','supplierItem'])
    },
    methods: {
      onLoad(page) {
        //模拟分页
        this.page.total = 40
      },

      
       handleAdd(){
          let i = this.rowData.length
          if(i>0){
              this.toggleSelection()
          }
        this.$refs.crud.rowAdd();
      },

       addGoods(row,done){
        // console.log(row)
      
      var arr = Object.keys(row)
        if(arr.length>0){
          // console.log(this.supplierItem)
          row.supplier = this.supplierItem[0].board
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
        // console.log(row)
         row.supplier = this.supplierItem[0].board
          this.$store.dispatch('UpdateGoods',{row,index}).then(
             ()=>{
                this.$message({
                showClose: true,
                message: "更新成功",
                type: "success"
              });
              //  关闭弹框
               done()
              //  清空选框数据
               this.toggleSelection()
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
          this.toggleSelection()
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
        })
        .catch(() => { });
     
    },

     handleEdit(){
        // console.log(this.rowData)
        let i = this.rowData.length
        if(i==0){
              this.$message({
              showClose: true,
              message: "请选择一行再操作",
              type: "warning"
            });
            return 
        }else if(i>1){
               this.$message({
              showClose: true,
              message: "一次不能选择多行",
              type: "warning"
            });
            return 
        }else{
           
            // 需要两个参数 当前行和下标
            // 弹出编辑窗口
        this.$refs.crud.rowEdit(this.rowData[0],this.rowData[0].$index);
     
        }

         
      },

      handelDelete(){
            let i = this.rowData.length
            if(i==0){
                  this.$message({
                  showClose: true,
                  message: "请选择一行再操作",
                  type: "warning"
                });
                return 
            }else if(i>1){
                  this.$message({
                  showClose: true,
                  message: "一次不能选择多行",
                  type: "warning"
                });
                return 
            }else{
               
                  // 需要两个参数 当前行和下标
            this.handelDel( this.rowData[0],this.rowData[0].$index)
            
         
            }

          },
    selectionChange(list){
     
      // console.log(list)
      // 将选取的数据保存到rowData中
      this.rowData=list
     
   
    },
    // 操作完成后取消之前的选择
     toggleSelection(val){
        this.$refs.crud.toggleSelection(val);
      },
  
    }
}
</script>
<style lang="">
    
</style>