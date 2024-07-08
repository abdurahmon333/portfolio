import React from 'react'
import '../styles/skills.css'
import Skills from '../imgs/work3.jpg'

export default function Skill() {
    return (
        <>
            <div id='myskills'></div>
            <section id='myskills' className='myskills'>

                <div className="name">
                    <h1>Skills</h1>
                </div>

                <div className="skills">

                    <div className="left-skills">

                        <div className="skill" data-aos="fade-down">
                            <div className="skill-text">
                                <h3>HTML</h3>
                                <h3>95%</h3>
                            </div>
                            <hr style={{ margin: '12px 0 0 -20px', width: '95%' }} />
                        </div>

                        <div className="skill" data-aos="fade-down">
                            <div className="skill-text">
                                <h3>CSS</h3>
                                <h3>86%</h3>
                            </div>
                            <hr style={{ margin: '12px 0 0 -20px', width: '86%' }} />
                        </div>

                        <div className="skill" data-aos="fade-down">
                            <div className="skill-text">
                                <h3>JAVASCRIPT</h3>
                                <h3>45%</h3>
                            </div>
                            <hr style={{ margin: '12px 0 0 -20px', width: '45%' }} />
                        </div>

                        <div className="skill" data-aos="fade-down">
                            <div className="skill-text">
                                <h3>REACT JS</h3>
                                <h3>40%</h3>
                            </div>
                            <hr style={{ margin: '12px 0 0 -20px', width: '40%' }} />
                        </div>

                    </div>

                    <div className="right-img" >

                        <img data-aos="fade-down" src={Skills} alt="" />

                    </div>

                </div>

            </section>
        </>
    )
}
