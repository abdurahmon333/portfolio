import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

export default function Contact() {

    const form = useRef()
    console.log(form)

    const sendEmail = e =>{
        console.log(form);
        e.preventDefault()  
        emailjs

        .sendForm(
            'service_yzp2wwh',
            'template_gjisba8',
            form.current,
            'ummCDzOxHE7KgmCZ-'
        )
        .then(
            result => {
                console.log(result.text);
                form.current.reset( '' )
            },
            error => {
                console.log(error.text);
            }
        )

    }

    return (
        <section id='contact' className='contact'>
            <div className="name">
                <h1 className='abaut'>Contact</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <input type="text" placeholder='Name' name='From_name' className='input'/>
                <input type="text" placeholder='Email' name='From_email' className='input'/>
                <textarea id="msg" name='message'></textarea>
                <button value='Send' id='send'>Submit</button>
            </form> 
        </section>
    )
}
