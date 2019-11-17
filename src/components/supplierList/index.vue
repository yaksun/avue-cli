<template>
    <div>
            <!-- append-to-body  嵌套弹框顶级显示 -->
               <el-form-item >
                     <el-input placeholder="选择供货商" style="width:50%;float:left" v-model="supplierInfo"></el-input>
                    <el-button type="primary" style="float:left" @click="dialogTableVisible = true">选择</el-button>
                    
                        <el-dialog 
                        
                        append-to-body  
                        title="供货商" 
                        :visible.sync="dialogTableVisible"
                        >
                                <Supplier 
                                :confirmStatus="dialogTableVisible" 
                                 @closeDialog="dialogTableVisible=false"
                                  @changeInfo="changeSupplier"/>
                            </el-dialog>
               </el-form-item>

    </div>
</template>
<script>
import Supplier from '../supplier'
export default {
    props:{
        row:Array
    },
    data(){
        return {
                dialogTableVisible: false,
                temp:[]
                
        }
    },
    methods:{
        changeSupplier(val){
              this.temp=val
        }
       
    },
    computed:{
        supplierInfo:{
            get(){
                if(this.temp.length==0){
                     return this.row.length > 0 ? this.row[0].supplier : ''

                }else{
                    return this.temp[0].board
                }
            },

            set(){

            }
        }
    },
    components:{
        Supplier
    }
}
</script>
<style lang="">
    
</style>