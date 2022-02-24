import React from 'react'
import Carousel from '../carousel/Carousel';
import Search from '../search/Search';
import MentorList from '../mentorList/MentorList';
import './Home.scss';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Carousel />
      <Search />
      <section className='container '>
        <div className='topMentors'>
          <h2>
          Ən çox bəyənilən İQ köməkçilər
          </h2>
          <Link to="/mentors" className='allMentors'>Bütün İQ köməkçilərə baxın</Link>
        </div>

        <MentorList />

      </section>
    </>
  )
}

export default Home