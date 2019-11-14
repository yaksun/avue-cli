<template>
    <div>
        <avue-crud :option="option" :data="data" :page="page" @on-load="onLoad" v-model="obj" @row-save="addGoods"></avue-crud>
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
               type: "icon-select",
              iconList: [{
                label: '基本图表',
                list: ['23','34','56']
              }]
            }

           

        
          ]
        },
        
      }
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
      addGoods(){
        console.log(this.obj)
      }
    }
}
</script>
<style lang="">
    
</style>