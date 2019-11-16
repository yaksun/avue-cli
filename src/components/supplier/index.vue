<template>
    <div>
        <avue-crud 
        :option="option"
         :data="data" 
         :page="page"
          @on-load="onLoad"
          @row-dblclick="handleRowDBLClick"
           @row-save="addSupplier"
           @row-update="updateSupplier"
         @row-del="handelDel"
         @selection-change="selectionChange"
          ref="crud"
           v-model="obj"
           >

            
             <template slot="menuLeft">
              <el-button type="primary" size="small"  @click.stop="handleAdd()">新增</el-button>
            </template>
             <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handleEdit()">编辑</el-button>
            </template>
            <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handelDelete()">删除</el-button>
            </template>
           </avue-crud>
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
        rowData:[],
        option: {
          // 操作栏图标显示
          //  menuType:'icon',
          // 隐藏操作栏
         menu:false,
          // 隐藏原生添加按钮
           addBtn:false,
          selection:true,
          // 清空按钮隐藏
          selectClearBtn:false,
          // 操作后清空选中数据
          // reserveSelection:false,
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

       handleAdd(){
        this.$refs.crud.rowAdd();
      },
      handleRowDBLClick(row, event){
        // 传入当前行
        this.$refs.crud.rowEdit(row);
      },
    selectionChange(list){
     
      console.log(list)
      // 将选取的数据保存到rowData中
      this.rowData=list
     
   
    },
    // 操作完成后取消之前的选择
     toggleSelection(val){
        this.$refs.crud.toggleSelection(val);
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
      updateSupplier(row,index,done){
          this.$store.dispatch('UpdateSupplier',{row,index}).then(
             ()=>{
                this.$message({
                showClose: true,
                message: "更新成功",
                type: "success"
              });
              //  关闭弹框
               done()
                this.toggleSelection()
             }
           )

           

      },

     
	   handelDel(row,index){

         this.$confirm(`是否确认删除货商${row.board}`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      })
        .then(() => {
          // this.supplierInfo.splice(index, 1);

          this.$store.dispatch('DelSupplier',index)
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
           this.toggleSelection()

        })
        .catch(() => { });
     
    
      }
     
    }

     
   
    

}
</script>
<style lang="">
    
</style>