import React from 'react'
import Link from 'gatsby-link'
import './footer.css'
import './icons/mail'
import Icn_mail from './icons/mail';

const Footer = () => (
    <div className="container__footer">
        <div className='footer'>
            <div className="footer__smm">
                <a href="mailto:lalalayka@gmail.com" className="footer__smm--item"><Icn_mail fill="black"/></a>
                <a href="https://www.linkedin.com/in/sergekovalchuk" target='_blank' className="footer__smm--item"><Icn_linkedin fill="black"/></a>
                <a href="https://www.facebook.com/xyemoe" target='_blank' className="footer__smm--item"><Icn_mail fill="black"/></a>
                <a href="https://www.instagram.com/xyemoe/" target='_blank' className="footer__smm--item"><Icn_mail fill="black"/></a>
            </div>  
            <div className="footer__copyright">
                <span>Sergey Kovalchuk&emsp;©&emsp;2011—2019</span>
            </div>
        </div>  
    </div>
)

export default Footer
