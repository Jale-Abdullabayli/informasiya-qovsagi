import React from 'react'
import './Questions.scss'
import { Link } from "react-router-dom";
import Search from '../search/Search';


function Questions() {
    return (
        <>
            <Search />
            <section className="questions">
                <div className="container">
                    
                    <div className="questionList">
                     <div className='row'>
                         <div className='col-md-6'>
                         <Link to="/questions/1" className="question">
                            <h2  className='questionTitle'>Lorem ipsum sit amet consectetur adipisicing elit?</h2>
                            <div className='statistics'>
                                <h4>Baxış sayı : 9</h4>
                                <h4>Cavab sayı : 5</h4>
                            </div>
                            <div className="author">
                                <h3>Jalə Abdullabəyli</h3>
                                <span className="date">2 gün əvvəl</span>
                            </div>
                           
                        </Link>
                         </div>
                         <div className='col-md-6'>
                         <Link to="/questions/1" className="question">
                            <h2  className='questionTitle'>Lorem ipsum sit amet consectetur adipisicing elit?</h2>
                            <div className='statistics'>
                                <h4>Baxış sayı : 9</h4>
                                <h4>Cavab sayı : 5</h4>
                            </div>
                            <div className="author">
                                <h3>Jalə Abdullabəyli</h3>
                                <span className="date">2 gün əvvəl</span>
                            </div>
                           
                        </Link>
                         </div>
                     </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Questions