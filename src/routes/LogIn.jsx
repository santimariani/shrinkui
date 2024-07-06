/* eslint-disable react-refresh/only-export-components */
import { Form, Navigate, useActionData } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

import { useEffect } from 'react';

export const action = async ({ request }) => {
    const formData = await request.formData();

    try {
        const url = `${import.meta.env.VITE_API_URL}/login`;
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        const statusCode = response.status;
        const data = await response.json();

        console.log('RESPONSE:', response, response.status);

        const { access_token } = data;
        localStorage.clear();
        localStorage.setItem('access_token', access_token);
        return statusCode === 200 ? true : false;
    } catch (error) {
        console.error('ERROR: ', error);
        return false;
    }
};

const LogIn = () => {
    const { isAuth, setIsAuth } = useAuth(false);
    const response = useActionData();

    useEffect(() => {
        setIsAuth(response);
    }, [response, setIsAuth]);

    return !isAuth ? (
        <div className='center'>
            <h2>Login</h2>
            <Form method="post" className='center'>
                <label>
                    Email Address&nbsp;
                    <input type="email" name="username" />&nbsp;
                </label>
                <label>
                    Password&nbsp;
                    <input type="password" name="password" />
                </label>
                <p></p>
                <button type="submit" className='center'>Login</button>
            </Form>
        </div>
    ) : (
        <Navigate to="/" />
    );
};

export default LogIn;
