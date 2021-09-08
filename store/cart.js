export const state = () => ({
    datas: [
    ],
})

export const getters = {
    total(state) {
        return state.datas.reduce((acc, p ) => {
          acc += p.prix * p.quantite
          return acc;
        }, 0);
    }
}

export const mutations = {
    addOne(state, allProduct) {
        const productindex = state.datas.findIndex( d => d.id === allProduct.id);
        if (productindex != -1) {
            state.datas[productindex].quantite++;
            return;
        }
        state.datas.push(allProduct);
    },

    addQuantity(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        state.datas[index].quantite++;
    },
    removeQuantity(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        if (index.quantite < 0) {
            state.datas[index].splice(index, 1);
        }
        state.datas[index].quantite--;
    },
    deleteOne(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        state.datas.splice(index, 1);
    }
}

export const actions = {
    sendCart({ state }) {
        const allProduct = state.datas.findIndex( d => d.id === allProduct.id)
        const stocks = allProduct.stocks - allProducts.quantite
        this.axios.put('http://localhost7878/produits', {...stocks})
      }
}