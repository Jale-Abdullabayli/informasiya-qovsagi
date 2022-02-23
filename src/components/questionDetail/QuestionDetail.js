import React from 'react'
import './QuestionDetail.scss'

function QuestionDetail() {
    return (
        <section className="replies">
            <div className="container">


                <div className="reply">
                    <div className='questionDetail'>
                        <h2>Lorem ipsum sit amet consectetur adipisicing elit?</h2>
                        <p>Lorem ipsum sit amet consectetur adipisicing elit. Lorem ipsum sit amet consectetur adipisicing elit</p>
                    </div>
                    <form>
                        <textarea placeholder="Cavabınız"></textarea>
                        <div className="buttons">
                            <button className='forward'>İQ köməkçiyə yönləndir</button>
                            <button>Cavab yaz</button>
                        </div>
                    </form>
                </div>
                <div className="otherReplies">
                    <h2>Digər cavablar</h2>

                    <div className="otherReply">
                        <div className="replyDetail">
                            <div className="author">
                                <h3>Bahar Abdullayeva</h3>
                                <span className="date">1 gün əvvəl</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis quae ipsam
                                vitae
                                expedita tempore sequi architecto perferendis ullam autem</p>
                            <div className="IsMentor">
                                Full stack üzrə mentor
                            </div>
                        </div>
                        <form>
                            <textarea placeholder="Cavabınız"></textarea>
                            <div className="buttons">
                                <button>Cavab yaz</button>
                            </div>
                        </form>
                        <div className='innerReply'>
                            <h3 className='innerReplyTitle'>
                               Bu cavaba verilmiş cavablar
                            </h3>
                            <div className="otherReply">
                                <div className="replyDetail">
                                    <div className="author">
                                        <h3>Azər Həsənov</h3>
                                        <span className="date">1 gün əvvəl</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis quae ipsam
                                        vitae
                                        expedita tempore sequi architecto perferendis ullam autem</p>
                                   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default QuestionDetail