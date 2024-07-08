import React from 'react'
import '../styles/about.css'

export default function About() {

    return (
    <>
    <div id='about'></div>
        <section className='about' >
          <h1 className="abaut">About</h1>
        <div className="haqimda">
        <img src="../7.png" alt="" className="rasm" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" />
        <h3 className='malumot' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">My surname is <span>Shokirov.</span> I am <span>15 years old.</span> I am interested in <span>programming.</span> <span>I will work</span> in this field in the <span>future.</span> So far I only know <span>JavaScript</span> programming language. I <span>also learn other</span> programming <span>languages.</span></h3>
      </div>
        </section>
    </>
    )
}
