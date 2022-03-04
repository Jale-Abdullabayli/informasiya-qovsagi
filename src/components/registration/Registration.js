import React from 'react'
import './Registration.scss';

function Registration() {
  return (
    <section className="registration">
    <div className="container">
        <form className='registrationForm'>
            <div className="form-group">
                <label for="username">Adınız soyadınız</label>
                <input type="text" className="form-control" id="full name"
                />
            </div>

            <div className="form-group">
                <label for="username">Emailiniz</label>
                <input type="email" className="form-control" id="email"
                />
            </div>

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

            <button type="submit" className="btn">Qeydiyyatdan keç</button>
        </form>
    </div>
</section>
  )
}

export default Registration