
import { getSupplierInfo,addSupplier} from '@/api/shop'



const supplier = {
        state:{
            supplierInfo: []
           
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

              AddSupplier({commit},supplierItem){
                return new Promise((resolve,reject)=>{
                  addSupplier(supplierItem).then((res)=>{
                    commit('ADD_SUPLLIER',supplierItem);
                    resolve(res)
                  }).catch(err =>{
                    reject(err)
                  })
                })
              }
        },
        mutations:{
        
          SET_SUPPLIERIFNO: (state, supplierInfo) => {
            state.supplierInfo = supplierInfo;
          },
          ADD_SUPLLIER:(state,supplierItem)=>{
            state.supplierInfo.push(supplierItem)
          }
        }
}


export default supplier