import React from 'react'
import '../styles/footer.css'
import { FaTelegram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
            <h1>Azamat</h1>
            <ul>
                <li><a href=""><FaTelegram /></a></li>
                <li><a href=""><IoLogoInstagram/></a></li>
            </ul>
    </footer>
  )
}
