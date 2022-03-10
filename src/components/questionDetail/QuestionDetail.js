import React from 'react'
import './QuestionDetail.scss'

function QuestionDetail() {
    return (
        <section className="replies">
            <div className="container">


                <div className="reply">
                    <div className='questionDetail'>
                        <h2>
AWS işlətmək ödənişlidir?</h2>
                        <p>

Öyrənmək məqsədi ilə AWS hesabı açmaq istəyirəm. Bunu ödənişsiz etmək olar?</p>
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
                            <div className="IsMentor">
                                Full stack üzrə İQ Köməkçi
                            </div>
                            <p>lk qeydiyyatdan keçdiyiniz zaman "free tier" yəni ödənişsiz seçimi olur. Hesab tam olacaq və sizə bütün imkanlar açıq olacaq, lakin bir neçə servis ödənişsiz kateqoriyasına aiddir yalnız. P.S Qeydiyyatdan keçən zaman yoxlanış üçün bank kartı əlavə etməli olacaqsınız.</p>
                            
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
                                    <p>lk qeydiyyatdan keçdiyiniz zaman "free tier" yəni ödənişsiz seçimi olur. Hesab tam olacaq və sizə bütün imkanlar açıq olacaq, lakin bir neçə servis ödənişsiz kateqoriyasına aiddir yalnız. P.S Qeydiyyatdan keçən zaman yoxlanış üçün bank kartı əlavə etməli olacaqsınız.</p>
                                   
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