import React from 'react'
import './AskQuestion.scss';

function askQuestion() {
  return (
    <section className="ask">
    <div className="container">
        <form className='askForm'>
            <div className="form-group">
                <label for="exampleFormControlInput1">Ad soyadınız</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                    />
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Kategoriya</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>Proqramlaşdırma</option>
                    <option>Musiqi</option>
                    <option>Coğrafiya</option>
                </select>
            </div>
         
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Sualınız</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
</section>
  )
}

export default askQuestion