<template>
    <div>
         <basic-container class="guide-container" >
                     
                        <div style="display:flex;left:200px">
                              <el-select v-model="value" 
                                placeholder="数据类型"
                                style="margin:0 20px"
                                >
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value" 
                                        >
                                        </el-option>
                                </el-select>
                      
                             <el-upload :show-file-list="true" action="action" :on-change="handleChange">
                            <el-button type="primary">导入</el-button>
                            </el-upload>
                            <div style="width:20px;"></div>
                            <el-button type="primary" @click="handleExcel" >导出</el-button>
                    
                        </div>
                       
                    </basic-container>

     <avue-crud ref="crud" :data="list" :option="option" >
         
    </avue-crud>
 

    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {


     data(){
            return {
                
                form:{},
                list:[],
                list1:[],
             

                   options: [
                       {
                        value: 'type1',
                        label: '供货商档案',
                        }, 
                        {
                        value: 'type2',
                        label: '商品档案',
                        }
                    ],

                     value: 'type2',

                     data1:[],
                     data2:[],
                  
                      option1: {
                      
                        column: [
                            {
                                label:'id',
                                prop:'goods_id'
                            },
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
                            prop:'goods_supplier'
                            }

                        

                        
                        ]
                   },

                     option2: {
                      
                        column: [
                              {
                                label:'id',
                                prop:'supplier_id'
                            },
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

          
            }

            
  },
    computed:{
       ...mapGetters(['goodsInfo','supplierInfo'])
    },
    watch:{
        value:function(val,oldVal){
            // console.log(val,oldVal)
            if(val != oldVal){
                this.handleSwitch()
            }
        }
    },

     created(){
      this.handleSwitch();
    
      this.$store.dispatch('GetGoodsInfo')
    //    this.$store.dispatch('GetSupplierInfo')
    },
    methods: {
      handleSwitch(){
        this.type=!this.type;
        if(this.type){
          this.option=this.option1;
          this.list = (this.list1 !==undefined && this.list1.length > 0)  ? this.list1 : this.data1;
        }else{
           this.option=this.option2;
           this.list = (this.list1 !==undefined && this.list1.length > 0)  ? this.list1 : this.data2;
        }

        console.log(this.list1)
        console.log(this.list)
      },

        getLabel(){
            let temp = ''
           this.options.forEach((item)=>{
               if(item.value == this.value){
                   temp = item.label
                  
               }
           })

           return temp
        },

      //导出execl
        handleExcel(){
           
             
                let opt = {
                title:this.getLabel(),
                column: this.option.column,
                data:this.list
            }

          
            this.$export.excel({
                title: opt.title || new Date().getTime(),
                columns: opt.column,
                data: opt.data
            });
     
        },

        // 导入execl
        handleChange(file, fileLis) {
        this.$export.xlsx(file.raw)
            .then(data => {

                // console.log(data.results)
            this.list1=data.results;
            })
        }
    }
}
</script>
<style lang="">
    
</style>