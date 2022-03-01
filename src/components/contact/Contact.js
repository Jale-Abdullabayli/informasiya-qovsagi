import React from 'react'
import './Contact.scss';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function Contact() {
    return (
        <section className='contact'>
            <div className='container'>
                <div className='contactTitle'>
                    <h4>Bizimlə əlaqə</h4>
                    <p>Təklifləriniz, iradlarınız və platformamızda
                        <b> İQ köməkçi kimi fəaliyyət göstərmək </b> üçün bizimlə əlaqə saxlayın.</p>
                </div>
                <div className='row contactRow'>
                    <div className='col-md-8 order-1 order-md-0 leftCol'>
                        <form className='contactForm'>
                            <div className="form-group">
                                <label for="username">Adınız soyadınız</label>
                                <input type="text" className="form-control" id="username"
                                />
                            </div>

                            <div className="form-group">
                                <label for="email">Email ünvanınız</label>
                                <input type="email" className="form-control" id="email"
                                />
                            </div>

                            <div className="form-group">
                                <label for="tel">Telefonunuz</label>
                                <input type="tel" className="form-control" id="tel"
                                />
                            </div>

                            <div className="form-group">
                                <label for="message">Mesajınız</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>

                            </div>

                            <button type="submit" className="btn">Göndər</button>

                        </form>
                    </div>
                    <div className='col-md-4 mb-3 mb-md-0'>
                        <div className='contactDetails'>
                           <div>
                           <a href='tel:+994558966083' className='contactDetail'>
                                <FiPhoneCall />
                                <span>+994 55 896 60 83</span>
                            </a>
                            <a href="mailto:informasiya.qovshaq@gmail.com" className='contactDetail'>
                                <FiMail />
                                <span>informasiya.qovshaq@gmail.com</span>
                            </a>
                           </div>
                            <div className='socialLinks'>
                            <a href='https://twitter.com/IQovsaq' target="_blank">
                                <BsTwitter />
                            </a>
                            <a href='https://www.instagram.com/iqovsaq/' target="_blank">
                                <BsInstagram />
                            </a>
                            <a href='https://www.facebook.com/IQovsaq/' target="_blank">
                                <FaFacebookF />
                            </a>
                        </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact