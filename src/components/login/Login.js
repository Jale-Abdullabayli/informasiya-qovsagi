import React from 'react'
import './Login.scss';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <section className="login">
            <div className="container">
                <form className='loginForm'>
                    <div className="form-group">
                        <label for="username">İstifadəçi adı</label>
                        <input type="text" className="form-control" id="username"
                        />
                    </div>

                    <div className="form-group">
                        <label for="parol">Parol</label>
                        <input type="password" className="form-control" id="parol"
                        />
                    </div>

                    <button type="submit" className="btn">Daxil ol</button>
                    <h6 className='registrationLink'>Hesabınız yoxdursa, ilk öncə <Link to='/registration'>buradan</Link> qeydiyyatdan keçin.</h6>
                    
                </form>
            </div>
        </section>
    )
}

export default Login