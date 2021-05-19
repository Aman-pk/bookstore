import {ActionTypes} from '../constants/action-types'

export const addToBasket = (item) => {
    return{
        type:ActionTypes.ADD_TO_BASKET,
        payload:{
            item
        }
    }
}