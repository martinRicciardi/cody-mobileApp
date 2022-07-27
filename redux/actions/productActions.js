import axios from 'axios';


const productActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://cody-coffee-api.herokuapp.com/api/products')
            dispatch({ type: "GETPRODUCTS", payload: res.data.response.products });
        }
    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(``)
            dispatch({ type: 'GETONEPRODUCT', payload: res.data.response })
        }
    },

    filterProduct: (input, category) => {
        return async (dispatch, getState) => {
            dispatch({ type: "FILTERPRODUCTS", payload: {input: input, category: category} })
        }
    },

    getProductsbyCategory: (category) => {
        return async (dispatch, getState) => {
            const res = dispatch({ type: 'GETPRODUCTSBYCATEGORY', payload: category }
            )
        }
    },
    addToCart: (id) => {
        return async (dispatch, getState) => {
            dispatch({ type: "ADD_TO_CART", payload: id })
        }
    },
    delFromCart: (id, all = false) => {
        return async (dispatch, getState) => {
            if (all) {
                dispatch({ type: 'DELETE_ALL_FROM_CART', payload: id })
            }
            else {
                dispatch({ type: 'DELETE_ONE_FROM_CART', payload: id })
            }
        }
    },

    clearCart: () => {
        return async (dispatch, getState) => {
            dispatch({ type: "CLEAR_CART", payload: null })
        }
    },
    buyProduct: (id, quantity) =>{
        return async (dispatch, getState) => {
            const res = await axios.get('https://cody-coffee-api.herokuapp.com/api/products/buy')
            dispatch({ type: "BUY", payload: res});
        }
    }
}

export default productActions