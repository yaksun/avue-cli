import { setStore, getStore } from '@/util/store'

import { getGoodsInfo, getSupplierInfo} from '@/api/shop'

const shop_info = {
        state:{
            goodsInfo:getStore({name:'goodsInfo'}) || [],
            supplierInfo:getStore({name:'supplierInfo'}) || []
        },
      
      
        actions:{
            GetGoodsInfo ({ commit }) {
                return new Promise((resolve, reject) => {
                  getGoodsInfo().then((res) => {
                    const data = res.data.data;
                    console.log(data)
                    commit('SET_GOODSIFNO', data.goods);
                 
                    resolve(data);
                  }).catch(err => {
                    reject(err);
                  })
                })
              },
              GetSupplierInfo ({ commit }) {
                return new Promise((resolve, reject) => {
                  getSupplierInfo().then((res) => {
                    const data = res.data.data.data;
                    commit('SET_SUPPLIERIFNO', data.supplier);
                 
                    resolve(data);
                  }).catch(err => {
                    reject(err);
                  })
                })
              },
        },
        mutations:{
          SET_GOODSIFNO: (state, goodsInfo) => {
            state.goodsInfo = goodsInfo;
          },
          SET_SUPPLIERIFNO: (state, supplierInfo) => {
            state.supplierInfo = supplierInfo;
          },
        }
}


export default shop_info