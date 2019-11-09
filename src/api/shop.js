import request from '@/router/axios';
export const getGoodsInfo = (page) => request({
    url: '/shop/getGoods',
    method: 'get',
    data: { page }
})

export const getSupplierInfo = (page) => request({
    url: '/shop/getSupplier',
    method: 'get',
    data: { page }
})


