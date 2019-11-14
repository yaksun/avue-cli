
import { getGoodsInfo} from '@/api/shop'



const goods = {
        state:{
            goodsInfo: [],
        },
      
      
        actions:{
            GetGoodsInfo ({ commit }) {

             
                return new Promise((resolve, reject) => {
                  getGoodsInfo().then((res) => {
                    const data = res.data.data;
                 
                    commit('SET_GOODSIFNO', data.goods);
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
        
        }
}


export default goods