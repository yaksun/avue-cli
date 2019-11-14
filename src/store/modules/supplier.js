
import { getSupplierInfo} from '@/api/shop'



const supplier = {
        state:{
            supplierInfo: [],
           
        },
      
      
        actions:{
       
              
              GetSupplierInfo ({ commit }) {
                return new Promise((resolve, reject) => {
                  getSupplierInfo().then((res) => {
                    const data = res.data.data;
                  //  console.log(data.supplier)
                    commit('SET_SUPPLIERIFNO', data.supplier);
                 
                    resolve(data);
                  }).catch(err => {
                    reject(err);
                  })
                })
              },
        },
        mutations:{
        
          SET_SUPPLIERIFNO: (state, supplierInfo) => {
            state.supplierInfo = supplierInfo;
          },
        }
}


export default supplier