import styled from "styled-components";

interface ContainerProps {
    showCart: boolean ;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed ;
    top: 0 ;
    right: ${ (props) => (props.showCart ? 
    '0' : '-350px ')} ; 

    width: 300px ;
    height: 100vh ;
    background-color: white ;

    padding: 2rem ;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25) ;

    transition: 0.3s ease-in ;
`

export const Title = styled.h1`

`

export const CartProductsList = styled.ul`
    padding: 2rem 0 ;
    list-style: none ;

    display: flex ;
    flex-direction: column ; 
    gap: 1rem ;
`

export const CartProductItem = styled.li`

`

export const CartTotal = styled.strong`

` 

export const CartButtonRemove = styled.button`
    background-color: red ;
    width: 70px ;
    height: 30px ;
    border-radius: 8px ;
    border: none ;
    transition: 0.3s ease-in ;

    &:hover {
        transform: scale(1.1) ;
        transition: 0.3s ease-in
    }
`