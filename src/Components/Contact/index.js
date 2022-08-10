import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import './index.scss'


const Contact =  () => {

    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_sbdclvg',
            'template_x5fkgbi',
            form.current,
             '5_UokBWe0gQcRs1zq'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }

 return ( 
 <>
    <div className="container contact-page">
        <div className="text-zone">
          <h2 className='title'>Contact Me</h2>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    </div>  
  </>
 )
}

export default Contact