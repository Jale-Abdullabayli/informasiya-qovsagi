import React from 'react'
import './Profil.scss';
import {Link} from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';


function Profil() {
    return (
        <section className="profil">
            <div className="container">
                <div className='row'>
                    <div className='col-md-4 mb-3 mb-md-0'>
                        <div className='profilDetail'>
                            <h1 className='fullName'>Leyla Hacıyeva</h1>
                            <span className='email'>email: example@gmail.com</span>
                            <span className='username'>username: lorem</span>
                            <span className='password'>password: lyl99</span>
                            <Link to='/registration' className='editProfil'><FiEdit2></FiEdit2><span>Redaktə et</span></Link>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='myQuestions'>
                            <h2>Verdiyim suallar</h2>
                            <ol>
                                <li>
                                <Link to='/questions/1'>Lorem ipsum sit amet consectetur adipisicing elit?</Link>
                                </li>
                                <li>
                                <Link to='/questions/1'>Lorem ipsum sit amet consectetur adipisicing elit?</Link>
                                </li>
                                <li>
                                <Link to='/questions/1'>Lorem ipsum sit amet consectetur adipisicing elit?</Link>
                                </li>
                            </ol>
                            </div>
</div>
                </div>
            </div>
        </section>
    )
}

export default Profil