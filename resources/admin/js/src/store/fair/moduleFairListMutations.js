/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations

==========================================================================================*/


export default {
  SET_FAIRS (state, data) {
    state.fairs = data.fairs;
  },
  ADD_ITEM (state, item) {
    state.products.unshift(item)
  },
  SET_PRODUCTS (state, products) {
    console.log(products)
    state.products = products
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_PRODUCT (state, product) {
    const productIndex = state.products.findIndex((p) => p.id === product.id)
    Object.assign(state.products[productIndex], product)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.products.findIndex((p) => p.id === itemId)
    state.products.splice(ItemIndex, 1)
  }
}
