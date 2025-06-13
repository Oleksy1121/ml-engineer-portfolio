import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

import { FaPhone, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa"
import {
  ContactCard,
  ContactContainer,
  FormButton,
  FormGroup,
  FormInput,
  FormTextArea,
  GetInTouch,
  MailContainer,
} from "./styles"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          alert("Wiadomość wysłana!")
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
          alert("Coś poszło nie tak, spróbuj ponownie.")
        }
      )
  }

  return (
    <ContactContainer id="contact">
      <h1 className="section-title">Contact</h1>
      <ContactCard className="app-card">
        <GetInTouch>
          <h2>Get in Touch</h2>
          <p>If you are interested in my profile, feel free to contact me via the options below:</p>
          <div>
            <FaPhone /> <span>607 105 661</span>
          </div>
          <div>
            <FaEnvelope /> <a href="mailto:m.oleszczyk@o2.pl">m.oleszczyk@o2.pl</a>
          </div>
          <div>
            <FaGithub />{" "}
            <a href="https://github.com/Oleksy1121" target="_blank" rel="noopener noreferrer">
              Oleksy1121
            </a>
          </div>
          <div>
            <FaLinkedinIn />{" "}
            <a href="https://www.linkedin.com/in/marcin-o-2aaa75208/" target="_blank" rel="noopener noreferrer">
              Marcin Oleszczyk
            </a>
          </div>
        </GetInTouch>

        <MailContainer>
          <form ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <div>
                <label htmlFor="firstName">Name</label>
                <FormInput type="text" id="firstName" name="first_name" placeholder="First" required />
              </div>
              <div>
                <label htmlFor="lastName">Last</label>
                <FormInput type="text" id="lastName" name="last_name" placeholder="Last" required />
              </div>
            </FormGroup>

            <div>
              <label htmlFor="email">Email</label>
              <FormInput type="email" id="email" name="user_email" placeholder="example@example.com" required />
            </div>

            <div>
              <label htmlFor="phone">Phone number (optional)</label>
              <FormInput type="tel" id="phone" name="user_phone" placeholder="Your phone number" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <FormTextArea id="message" name="message" placeholder="Put message here" required />
            </div>

            <FormButton type="submit">Send Mail</FormButton>
          </form>
        </MailContainer>
      </ContactCard>
    </ContactContainer>
  )
}

export default Contact
