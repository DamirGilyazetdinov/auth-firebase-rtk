import { useTypedSelector } from './redux-hooks';

export function useAuth() {
    const { email, token, id } = useTypedSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}