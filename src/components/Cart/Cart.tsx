import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles'
import { RootReducer } from '../../Redux/root-reducer';


interface CartProps {
    showCart: boolean ;
}


export const Cart: React.FC<CartProps> = ({showCart }) => {

        const dispatch = useDispatch() ;

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer )

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0) ;
    
    return (
        <S.Container showCart={showCart}>
            <S.Title>Carrinho</S.Title>

            <S.CartProductsList>
                { cart.map(product => (
                    <><S.CartProductItem key={product.id}><strong>{product.title}</strong> - R${product.price}</S.CartProductItem>
                    <S.CartButtonRemove onClick={() => dispatch({type: 'cart/remove-product' , payload: product })}>🗑️</S.CartButtonRemove></>
                )) }
            </S.CartProductsList>

            <S.CartTotal>Total: R${total}</S.CartTotal>
        </S.Container>
    )
}
