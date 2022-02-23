import React from 'react'
import './Search.scss';

function Search() {
  return (
    <section className="search">
    <div className="container">
        <form>
            <input type="text" placeholder="Başlıq və ya izah üzrə"/>
            <button className="btn" type="submit">Axtar</button>
        </form>
    </div>
</section>
  )
}

export default Search