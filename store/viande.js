export const state = () => ({
    datas: [
        {
            name: 'Axoa de porc 2 personnes',
            poids: '380 GR',
            prix: 8.9,
            producteurs: 'La ferme Elizaldia',
            quantite: 1,
            stocks: 10,
          },
          {
            product: 'Piperade',
            weight: '380 GR',
            price: 4.5,
            name: 'La ferme Elizaldia',
            quantity: 1,
            stocks: 10,
       
          },
          {
            product: 'Tajine de mouton 3-4 personnes',
            weight: '750 GR',
            price: 15.9,
            name: 'La ferme Elizaldia',
            quantity: 1,
            stocks: 10,
       
          },
          {
            product: '4 saucisses confites',
            weight: '330 GR',
            price: 7,
            name: 'La ferme Elizaldia',
            quantity: 1,
            stocks: 10,
   
          },
          {
            product: 'Couscous de mouton 3-4 personnes',
            weight: '750 GR',
            price: 15.9,
            name: 'La ferme Elizaldia',
            quantity: 1,
            stocks: 10,
     
          },
    ]
  })
  
  export const mutations = {
    addProductQuantityV(state, id) {
      const index = state.datas.findIndex((d) => d.id === id)
      state.datas[index].quantity++
    },
    removeQuantityV(state, id) {
      const index = state.datas.findIndex((d) => d.id === id)
      if (index.quantity === 0) {
        state.datas[index].splice(index, 1)
      }
      state.datas[index].quantity--
    }
  }
  