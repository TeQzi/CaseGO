import Router from 'next/router';
import cookie from 'js-cookie';
import React, { useState } from 'react';

export default function Sign() {
    const [loginError, setLoginError] = useState('');

    const registerUser = async event => {
        event.preventDefault()
        const res = await fetch('/api/login', {
            body: JSON.stringify({
                name: event.target.uname.value,
                password: event.target.psw.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((r) => {
                return r.json();
            })
            .then((data) => {
                console.log(data)
                if (data && data.error) {
                    setLoginError(data.message);
                }
                if (data && data.token) {

                    //set cookie
                    cookie.set('token', data.token, { expires: 2 });
                    Router.push('/');
                }
            });

    }

    return (
        <form className="modal-content animate" onSubmit={registerUser}>
            <div className="imgcontainer">
                <span className="close"
                    title="Close Modal">×</span>

            </div>

            <div className="container">
                <label htmlFor="uname" ><b className="asd">Имя пользователя</b></label>
                <input className='logs' type="text" placeholder="Введите имя пользователя" name="uname" required />

                <label htmlFor="psw"><b className="asd"> Пароль</b></label>
                <input className='logs' type="password" placeholder="Введите пароль" name="psw" required />

                <button type="submit" className='logs'>Войти</button>

                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
               
            </div>

            <div className="container">
                <style jsx>{`.container {background-color:#f1f1f1;}`}</style>
            </div>
        </form>
    )
}