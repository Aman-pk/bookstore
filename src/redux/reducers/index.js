import {combineReducers} from "redux"
// import {productReducer} from './productReducer'
import {cartReducer} from './cartReducer'

const reducers = combineReducers({
    allProducts:cartReducer
})

export default reducers
