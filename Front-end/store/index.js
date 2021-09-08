export const state = () => ({
    allProducts: [],
    // featuredProducts: [],
    // menProducts: [],
    // womenProducts: [],
    // cartItems: [],
  })
  export const getters = {
    /* 
      return items from store
    */
    allProducts: (state) => state.allProducts,
    // featuredProducts: (state) => state.featuredProducts,
    // menProducts: (state) => state.menProducts,
    // womenProducts: (state) => state.womenProducts,
    // getCart: (state) => state.cartItems,
    // getCartTotal: (state) =>
    //   state.cartItems.length < 1
    //     ? '0'
    //     : state.cartItems
    //         .map((el) => el.price * el.quantity)
    //         .reduce((a, b) => a + b),
  }
  export const actions = {
    async addItemToCart({ commit }, cartItem) {
      await commit('setCartItem', cartItem)
    },
    async deleteCartItem({ commit }, id) {
      await commit('removeCartItem', id)
    },
  }
  export const mutations = {
    setProducts: (state, products) => (state.allProducts = products),
//     setFeaturedProducts: (state, products) => (state.featuredProducts = products),
//     setMenProducts: (state, products) => (state.menProducts = products),
//     setWomenProducts: (state, products) => (state.womenProducts = products),
//     setCartItem: (state, item) => state.cartItems.push(item),
//     removeCartItem: (state, id) =>
//       state.cartItems.splice(
//         state.cartItems.findIndex((el) => el.id === id),
//         1
//       ),

addProductQuantity(state, id) {
  const index = state.allProducts.findIndex((d) => d.id === id)
  state.allProducts[index].quantite++
},
removeQuantity(state, id) {
  const index = state.allProducts.findIndex((d) => d.id === id)
  if (index === 0) {
    state.allProducts[index].splice(index, 1)
  }
  state.allProducts[index].quantite--
}
  }