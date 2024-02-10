import { Product } from "../../Data/Products";

interface CartState {
    cart: Product[] ;
}


// No Redux todo estado vai ser um objeto
const initialState: CartState = {
    cart: [ ] 
} ;

interface CartAction {
    type: string ,
    payload: Product 
}

export function cartReducer(state = initialState, action: CartAction ) {
    switch(action.type) {
        case 'cart/add-product' :
            return {
                ...state ,
                cart: [
                    ...state.cart ,
                    action.payload , // payload: produto que se deseja adicionar no carrinho
                ]
            } ;
        case 'cart/remove-product':
            const productToRemove = action.payload 
            const CartFiltered = state.cart.filter( product => product.id !== productToRemove.id )

            return {
                ...state ,
                cart: CartFiltered ,
            }
        default:
            return state ;
    } 
}