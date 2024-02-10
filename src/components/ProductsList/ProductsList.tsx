import { ProductCard } from '../ProductCard/ProductCard'
import * as S from './styles'
import { products } from '../../Data/Products'

export const ProductsList: React.FC = () => {
// Se voce preferir, voce pode utilizar um useEfect para puxar os dados 
// da API 

    return(
        <S.Container>
            { products.map((product) => (
                <ProductCard key={product.id} product={product} />
            )) }
        </S.Container>
    )
}