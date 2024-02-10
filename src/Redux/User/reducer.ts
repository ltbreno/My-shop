
interface User { 
    name: string ;
    email: string ;
}

interface UserState {
    user: User | null ;
}

export const initalEstate: UserState = {
    user: null ,
}
// Reducer: Guarda o estado que desejamos compartilhar na aplicação
//          manipula/altera o estado

interface UserAction {
    type: string ,
    payload?: User
}

// Todo reducer precisa retornar o nosso estado atualizado
export function userReducer( state = initalEstate, action: UserAction ) : UserState {
    if (action.type === 'user/login') {
        return { 
            ...state ,
            user: action.payload as User,
         }
    } else if (action.type === 'user/logout') {
        return {
            ...state ,
            user: null ,
        }
    }

    return state ; 
}