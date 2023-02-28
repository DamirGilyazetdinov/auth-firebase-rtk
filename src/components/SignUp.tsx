import React from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import { Form } from './Form';
import { useTypedDispatch } from 'hooks/redux-hooks';

const SignUp = () => {
    const dispatch = useTypedDispatch();
    const { push } = useHistory();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                //@ts-ignore
                dispatch(setUser({ email: user.email, id: user.uid, token: user.accessToken }));
                push('/');
            })
            .catch(() => alert('Что-то пошло не так, проверь данные :)'));
    };

    return <Form title="Sign up" onClick={handleRegister} />;
};

export { SignUp };
