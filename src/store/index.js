import { createStore } from "vuex";
import productStore from './productStore.js';
import userAuth from './userAuth.js';

export default createStore({
        modules: {
            productStore,
            userAuth
        }
    }
)