import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import { Form } from './Form';
import { useTypedDispatch } from 'hooks/redux-hooks';

const Login = () => {
    const dispatch = useTypedDispatch();
    const { push } = useHistory();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                //@ts-ignore
                dispatch(setUser({ email: user.email, id: user.uid, token: user.accessToken }));
                push('/');
            })
            .catch(() => alert('Что-то пошло не так, проверь данные :)'));
    };

    return <Form title="Sign in" onClick={handleLogin} />;
};

export { Login };
