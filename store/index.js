import Vuex from "vuex"
import Cookie from 'js-cookie'


const createStore = () => {
    return new Vuex.Store({
        state: {
            brands: null,
            products: null,
            printer_type: null,
            part_type: null,
            material_type: null,
            industry: null,
            color: null,
            productSelect: '',
            productTypeSelect: '',
            brandSelect: '',
            max_price: '',
            min_price: '',
            weight: '',
            diameter: '',
            token: null,
        },

        mutations: {
            setBrands(state, payload) {
                state.brands = payload
            },
            setProducts(state, payload) {
                state.products = payload
            },
            setPrinterType(state, payload) {
                state.printer_type = payload
            },
            setPartType(state, payload) {
                state.part_type = payload
            },
            setMaterialType(state, payload) {
                state.material_type = payload
            },
            setIndustry(state, payload) {
                state.industry = payload
            },
            setColor(state, payload) {
                state.color = payload
            },
            setProductSelect(state, payload) {
                state.productSelect = payload
            },
            setProductTypeSelect(state, payload) {
                state.productTypeSelect = payload
            },
            setBrandSelect(state, payload) {
                state.brandSelect = payload
            },
            setMaxPrice(state, payload) {
                state.max_price = payload
            },
            setMinPrice(state, payload) {
                state.min_price = payload
            },
            setWeight(state, payload) {
                state.weight = payload
            },
            setDiameter(state, payload) {
                state.diameter = payload
            },
            setToken(state, payload) {
                state.token = payload
            },
            setUser(state, payload) {
                state.userInfo = payload
            },
        },

        actions: {
            async nuxtServerInit({ commit, getters }) {

                // Brands
                // await this.$axios.$get('/brand/all')
                //     .then(res => commit('setBrands', res))
                //     .catch(err => console.log(err))
            },

            saveUserInfo({commit, state}, res){
                // commit('setToken', res.token)
                // commit('setUser', res.user)
                
                // function replacer(key, value) {
                //     if (key == "password") return undefined;
                //     else if (key == "unique_token") return undefined;
                //     else return value;
                // }
                
                // localStorage.setItem('usr', JSON.stringify(res.user, replacer))
                // localStorage.setItem('nathanhr-token', res.token)
                // Cookie.set('nathanhr-cookie', res.token)
            },

            initAuth(context, req) {
                let token;
                let hr;
                let emp;

                // if (req) {
                //     if (!req.headers.cookie) {
                //         return;
                //     }

                //     const theCookie = req.headers.cookie
                //         .split(";")
                //         .find(c => c.trim().startsWith("nathanhr-cookie="));

                //     if (!theCookie) {
                //         return;
                //     }

                //     token = theCookie.split("=")[1]
                // } else if (process.client) {
                //     token = localStorage.getItem("nathanhr-token");
                // } else {
                //     token = null;
                // }
                // context.commit("setToken", token);
            },
        },

        getters: {
            getBrands(state) {
                return state.brands
            },
            getProducts(state) {
                return state.products
            },
            getPrinterType(state) {
                return state.printer_type
            },
            getPartType(state) {
                return state.part_type
            },
            getMaterialType(state) {
                return state.material_type
            },
            getIndustries(state) {
                return state.industry
            },
            getColors(state) {
                return state.color
            },
            getProductSelect(state) {
                return state.productSelect
            },
            getProductTypeSelect(state) {
                return state.productTypeSelect
            },
            getBrandSelect(state) {
                return state.brandSelect
            },
            getMaxPrice(state) {
                return state.max_price
            },
            getMinPrice(state) {
                return state.min_price
            },
            getWeight(state) {
                return state.weight
            },
            getDiameter(state) {
                return state.diameter
            },
            isAuthenticated(state) {
                return state.token != null
            },
        }
    })
}

export default createStore
export const strict = false