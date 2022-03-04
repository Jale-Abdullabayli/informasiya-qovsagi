import React from 'react'
import mentor1 from '../../assets/images/mentor1.jpg';
import mentor2 from '../../assets/images/mentor2.png';
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import './MentorList.scss';

function MentorList({mentors}) {
  return (
    <div className="row">
    <div className="col-md-6 mb-3">
        <div className="mentor">
            <img src={mentor1} alt="" />
            <div className="about">
                <h2>Əli Əliyev</h2>
                <h3>Pianist</h3>
                <div className="stars">
                    <AiFillStar/>     <AiFillStar/>
                </div>
                <Link to=""> Cavabladığı suallara baxın</Link>
            </div>
        </div>
    </div>
    <div className="col-md-6 mb-3">
        <div className="mentor">
            <img src={mentor2} alt="" />
            <div className="about">
                <h2>Arzu Hacıyeva</h2>
                <h3>Full stack developer</h3>
                <div className="stars">
                    <AiFillStar/>     <AiFillStar/>
                </div>
                <Link to="">Cavabladığı suallara bax</Link>

            </div>
        </div>
    </div>
    <div className="col-md-6 mb-3">
        <div className="mentor">
            <img src={mentor2} alt="" />
            <div className="about">
                <h2>İradə Hacıyeva</h2>
                <h3>Psixoloq</h3>
                <div className="stars">
                    <AiFillStar/>     <AiFillStar/>
                </div>
                <Link to="">Cavabladığı suallara bax</Link>

            </div>
        </div>
    </div>
    <div className="col-md-6 mb-3">
        <div className="mentor">
            <img src={mentor1} alt="" />
            <div className="about">
                <h2>Ramiz Quliyev</h2>
                <h3>Flutter developer</h3>
                <div className="stars">
                    <AiFillStar/>     <AiFillStar/>
                    <AiFillStar/>     <AiFillStar/>
                </div>
                <Link to=""> Cavabladığı suallara baxın</Link>
            </div>
        </div>
    </div>
    
    <div className="col-md-6 mb-3">
        <div className="mentor">
            <img src={mentor1} alt="" />
            <div className="about">
                <h2>Murad Həsənov</h2>
                <h3>Front end developer</h3>
                <div className="stars">
                    <AiFillStar/>     <AiFillStar/>
                    <AiFillStar/>
                </div>
                <Link to=""> Cavabladığı suallara baxın</Link>
            </div>
        </div>
    </div>
    <div className="col-md-6 mb-3">
        <div className="mentor">
            <img src={mentor2} alt="" />
            <div className="about">
                <h2>Səkinə Abdullayeva</h2>
                <h3>HR</h3>
                <div className="stars">
                    <AiFillStar/>     <AiFillStar/>
                </div>
                <Link to="">Cavabladığı suallara bax</Link>

            </div>
        </div>
    </div>
</div>
  )
}

export default MentorList