import request from '@/router/axios';
export const getGoodsInfo = () => request({
    url: '/shop/getGoods',
    method: 'get',
   
})

export const getSupplierInfo = () => request({
    url: '/shop/getSupplier',
    method: 'get',

})


