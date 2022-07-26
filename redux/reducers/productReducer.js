const initialState = {
    products: [],
    aux: [],
    oneProduct: {},
    productsbycategory: [],
    filter: [],
    cart: []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GETPRODUCTS":
            return {
                ...state,
                products: action.payload,
                aux: action.payload,
                filter: action.payload //se llena el array para q antes del search ya se vean las cards
            }

        case 'GETONEPRODUCT':
            return {
                ...state,
                oneProduct: action.payload,
                aux: action.payload
            }

        case "FILTERPRODUCTS":
            let productFilter = state.products.filter(item => item.name.toLowerCase().startsWith(action.payload.input.trim().toLowerCase()) && item.categories.includes(action.payload.category))
            if (action.payload.input !== '') {
                return {
                    ...state, //tomo el estadio inicial
                    filter: productFilter //le cargo este nuevo estado del filtro

                }
            } else {
                return {
                    ...state, //tomo el estadio inicial
                    filter: state.productsbycategory //le cargo este nuevo estado del filtro

                }
            }

        case 'GETPRODUCTSBYCATEGORY':
            let productByCategory = state.products.filter(item => item.categories.includes(action.payload))
            return {
                ...state,
                // productsbycategory: productByCategory,
                filter: productByCategory,
                aux: action.payload
            }

        case "ADD_TO_CART":
            // Busca el producto por id
            let newItem = state.products.find(
                (product) => product._id === action.payload
            );
            //console.log(newItem);
            // Se fija si el producto ya está agregado al carrito
            let itemInCart = state.cart.find((item) => item._id === newItem._id);

            return itemInCart
                ?
                // Si ya está agregado, lo busca y le suma 1 a cuantity
                {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === newItem._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                // Si no está, agrega el objeto entero + la propiedad quantity 1
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };

        case "DELETE_ONE_FROM_CART":
            let itemToDelete = state.cart.find((item) => item._id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item._id !== action.payload),
                };

        case "DELETE_ALL_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };

        default:
            return state
    }
}

export default productReducer