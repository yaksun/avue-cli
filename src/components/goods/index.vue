<template>
    <div>
        <avue-crud :option="option" :data="data" :page="page" @on-load="onLoad"></avue-crud>
    </div>
</template>
<script>
export default {
    data() {
      return {
        page: {
          pageSize: 20
        },
        option: {
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
              prop:'goods_supplier'
            }

           

        
          ]
        },
        data: [
                {
                    id:'1',
                    goods_name:'路兹贝尔',
                    goods_number:'7499',
                    goods_color:'黑',
                    goods_size:'37',
                    goods_supplier:'兰州东部鞋城103号'

                },
                {
                    id:'2',
                    goods_name:'路兹贝尔',
                    goods_number:'7499',
                    goods_color:'黑',
                    goods_size:'36',
                    goods_supplier:'兰州东部鞋城277号'

                },
            ]
      }
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