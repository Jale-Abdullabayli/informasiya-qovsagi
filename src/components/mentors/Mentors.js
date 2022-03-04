import React from 'react'
import './Mentors.scss';
import MentorList from '../mentorList/MentorList';
import { connect } from 'react-redux';
import { fetchMentors } from '../../redux'
import { useEffect } from 'react';

function Mentors({ mentorsData, fetchMentors }) {
    useEffect(() => {
        fetchMentors();
    }, []);

    return (
        <section className="mentors">
            <div className="container">
                <div className='mentorTitle'>
                    <h4>İQ köməkçi nə üçündür?</h4>
                    <p>Təsəvvür edin ki, vacib bir imtahana hazırlaşırsız və bu imtahanı bilən adam axtarırsız.
                        Təsəvvür edin ki, iş axtarırsız və bu istiqamətdə sizə kömək edə bilən şəxs lazımdır.
                        Təsəvvür edin ki, startup qurursunuz və biznes təcrübəsindən yararlanmaq istəyirsiz.
                        İndi isə təsəvvür edin ki, sizin axtardığınızı təmin edə bilən platforma var.
                        Bu platforma məhz İQ - İnformasiya Qovşağımızdır.
                        Biz sizlərə sadaladığımız hallar ilə yanaşı bir çox digər hallarda zəruri olan konsultasiya xidmətlərini əlçatan və sərfəli etməyi özümüzə missiya seçmişik.</p>
                </div>
                {
                    mentorsData.loading ? <h2>Yüklənir...</h2> :
                        mentorsData.error ? <h2>{mentorsData.error}</h2> :
                            <div>
                                {
                                    mentorsData && mentorsData.mentors &&
                                    <MentorList mentors={mentorsData.mentors} />
                                }
                            </div>

                }
            </div>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        mentorsData: state.mentor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMentors: () => dispatch(fetchMentors())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mentors)