import { Product } from '../../Data/Products';
import * as S from './styles'
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar  } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../Redux/root-reducer';

interface ProductCardProps {
    product: Product ;
}

export const ProductCard : React.FC<ProductCardProps> = ({product}) => {

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer) 
    const dispatch = useDispatch() ;

// Variavel booleana que informa se o produto esta no carrinho
    const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id ) !== undefined

    function handleAddProductToCard() {
        //despachar a ação de adicionar o carrinho
        dispatch({
            type: 'cart/add-product' ,
            payload: product ,
        })
    }

    function handleRemoveProductToCard() {
        dispatch({
            type: 'cart/remove-product' ,
            payload: product ,
        })
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image}
            alt={product.description} />

            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceContainer>
                <S.Review>
                    { Array.from({ length: 5 }).map ((_ , index) =>
                     index < Math.round(product.rating.rate) ? ( 
                     <AiFillStar key={index} /> 
                    ) : (
                    <AiOutlineStar key={index} />
                    )
                )}
                    ({product.rating.rate})
                    </S.Review>

                <S.Price>R${product.price}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                { isProductOnCart ? (
                    <S.RemoveFromCartButton onClick={handleRemoveProductToCard}>
                    Remover do carrinho
                    <FiShoppingCart />
                    </S.RemoveFromCartButton>
                ) : (
                <S.AddToCartButton onClick={handleAddProductToCard}>
                    Adicionar ao carrinho
                    <FiShoppingCart />
                </S.AddToCartButton>  
                ) }

            </S.AddToCartButtonWrapper>    
        </S.Card>
    )
}