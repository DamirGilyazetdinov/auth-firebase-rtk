import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { useTypedDispatch } from 'hooks/redux-hooks';

const HomePage = () => {
    const { isAuth, email } = useAuth();
    const dispatch = useTypedDispatch();
    return isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
    ) : (
        <Redirect to="/login" />
    );
};

export default HomePage;
