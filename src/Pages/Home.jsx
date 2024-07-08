import React from 'react'
import '../styles/home.css'
import AOS from 'aos';

export default function Home() {

    AOS.init({
        duration: '1500'
    });

  return (
    <section id='home' className='home'>
            <div className="hom" data-aos="fade-up" data-aos-duration="3000">
        <div className="ikki">
          <h1 className='ism' >Hello<br /> My Name Is <span>Abdurahmon</span></h1>
        </div>
      </div>
    </section>
  )
}
