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
                {
                    id:'1',
                    arrange:'9527',
                    board:'兰州东部鞋城101号',
                    contact:'8650805'

                },
                {
                    id:'2',
                    arrange:'9526',
                    board:'兰州东部鞋城103号',
                    contact:'8650805'

                },
                {
                    id:'1',
                    arrange:'9528',
                    board:'兰州东部鞋城104号',
                    contact:'8650805'

                }
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