import axios from "axios";
import {data} from "autoprefixer";

export default {
    state() {
        return {
            products: [],
            productDetails: null,
            basket: [],
            singleProduct: [],
            favoriteProducts: []
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProductDetails(state) {
            return state.productDetails
        },
        getBasket(state) {
            return state.basket
        },
        getSingleProduct(state) {
            return state.singleProduct
        },
        getFavoriteProducts(state) {
            return state.favoriteProducts
        }
    },
    mutations: {
        updateProducts(state, data) {
            state.products = data
        },
        updateProductDetails(state, data) {
            state.productDetails = data
        },
        updateBasket(state, data) {
            state.basket = data
        },
        updateProductQuantity(state, {id, quantity}) {
            const product = state.basket.find(item => item.id === id)
            if (product) {
                product.quantity = quantity;
            }
        },
        removeProductFromBasket(state, productID) {
            state.basket = state.basket.filter(product => product.id !== productID)
        },
        updateSingleProduct(state, data) {
            state.singleProduct = data
        },
        updateFavoriteProducts(state, data) {
            state.favoriteProducts = data
        },
        removeFavoriteProduct(state, productID) {
            state.favoriteProducts = state.favoriteProducts.filter(product => product.id !== productID);
        }
    },
    actions: {
        loadProducts({commit}, {category, order}) {
            let sortOrder = order === 'asc' ? 'asc' : 'desc'
            axios.get(`http://localhost:3000/${category}?_sort=price&_order=${sortOrder}`)
                .then(res => {
                    commit('updateProducts', res.data)
                })
        },
        loadProductDetails({commit}, {category, productName}) {
            axios.get(`http://localhost:3000/${category}?link=${productName}`)
                .then(res => {
                    commit('updateProductDetails', res.data[0])
                })
        },
        addFavoriteProduct({commit}, product) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.post('http://localhost:3000/favorites', {
                ...product,
                userId: userID
            })
                .then(res => {
                    commit('updateFavoriteProducts', res.data)
                })
        },
        loadFavoriteProducts({commit}) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.get(`http://localhost:3000/favorites?userId=${userID}`)
                .then(res => {
                    commit('updateFavoriteProducts', res.data)
                })
        },
        deleteFavoriteProduct({commit}, productID) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.delete(`http://localhost:3000/favorites/${productID}`, {
                data: {userId: userID}
            })
                .then(() => {
                    commit('removeFavoriteProduct', productID)
                })
        },
        loadBasketProduct({commit}) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.get(`http://localhost:3000/basket?userId=${userID}`)
                .then(res => {
                    const basketWithQuantities = res.data.map(product => ({
                        ...product,
                        quantity: product.quantity || 1
                    }))
                    commit('updateBasket', basketWithQuantities)
                })
        },
        updateProductToBasket({commit}, product) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.patch(`http://localhost:3000/basket/${product.id}`, {
                userId: userID,
                quantity: product.quantity + 1
            })
                .then((res) => {
                    commit('updateProductQuantity', {id: product.id, quantity: res.data.quantity})
                });
        },
        addProductToBasket({commit, state, dispatch}, product) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id

            const existingProduct = state.basket.find(item => item.id === product.id)
            if (existingProduct) {
                dispatch('updateProductToBasket', existingProduct)
            } else {
                axios.post('http://localhost:3000/basket', {
                    ...product,
                    userId: userID,
                    quantity: 1
                })
                    .then((response) => {
                        commit('updateBasket', [...state.basket, response.data])
                    })
            }
        },
        updateProductQuantity({commit}, {id, quantity}) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.patch(`http://localhost:3000/basket/${id}`, {
                userId: userID,
                quantity
            })
                .then(() => {
                    commit('updateProductQuantity', {id, quantity})
                });
        },
        deleteProductBasket({commit}, productID) {
            const user = JSON.parse(localStorage.getItem('user'))
            const userID = user.id
            axios.delete(`http://localhost:3000/basket/${productID}`, {
                data: {userId: userID}
            })
                .then(() => {
                    commit('removeProductFromBasket', productID)
                })
        },
        clearBasket({commit, state}) {
            const user = JSON.parse(localStorage.getItem('user'));
            const userID = user.id;

            for (const product of state.basket) {
                axios.delete(`http://localhost:3000/basket/${product.id}`, {
                    data: {userId: userID}
                });
            }
            commit('updateBasket', []);
        },
        buySingleProduct({commit, state}, productID) {
            const product = state.products.find(item => item.id === productID)
            if (product) {
                commit('updateSingleProduct', product)
            }
        }
    }
}