import React from 'react'
import mentor1 from '../../assets/images/mentor1.jpg';
import mentor2 from '../../assets/images/mentor2.png';
import { Link } from "react-router-dom";
import './MentorList.scss';

function MentorList() {
  return (
    <div className="row">
    <div className="col-md-6">
        <div className="mentor">
            <img src={mentor1} alt="" />
            <div className="about">
                <h2>Arzu Hacıyeva</h2>
                <h3>Full stack developer</h3>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <Link to="">Cavabladığı suallara bax</Link>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="mentor">
            <img src={mentor2} alt="" />
            <div className="about">
                <h2>Arzu Hacıyeva</h2>
                <h3>Full stack developer</h3>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <Link to="">Cavabladığı suallara bax</Link>

            </div>
        </div>
    </div>
</div>
  )
}

export default MentorList