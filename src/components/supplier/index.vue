<template>
    <div>
        <avue-crud :option="option" :data="data" :page="page" @on-load="onLoad"></avue-crud>
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
      }
    }
}
</script>
<style lang="">
    
</style>