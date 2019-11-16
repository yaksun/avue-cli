<template>
    <div>
            <!-- append-to-body  嵌套弹框顶级显示 -->
               <el-form-item >
                     <el-input placeholder="选择供货商" style="width:50%;float:left" ></el-input>
                    <el-button type="primary" style="float:left" @click="dialogTableVisible = true">选择</el-button>
                    
                        <el-dialog 
                        
                        append-to-body  
                        title="供货商" 
                        :visible.sync="dialogTableVisible"
                        >
                                <Supplier />
                            </el-dialog>
               </el-form-item>

    </div>
</template>
<script>
import Supplier from '../supplier'
export default {
    data(){
        return {
                dialogTableVisible: false,
        }
    },
    methods:{
       
    },
    components:{
        Supplier
    }
}
</script>
<style lang="">
    
</style>