
import React, { useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(username, password)
    }


    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>

                    <div className="container">
                        <label htmlFor="uname" className="labell"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)}/>

                            <label htmlFor="psw"><b className="labell">Password</b></label>
                            <input type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>

                                <button type="submit" className="buttonn"> Login </button>
                            </div>

                        </form>
            <Footer />
        </>
    );
}

