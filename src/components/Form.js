import React from 'react'
import styled from 'react-emotion'

const EmailForm = () => {
  return (
    <Form action="https://formspree.io/iwilsonq@gmail.com" method="POST">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="enter your email to for exclusive updates"
            name="_replyto"
          />
        </div>
        <div className="control">
          <button type="sybmit" className="button is-danger">
            Send
          </button>
        </div>
      </div>
    </Form>
  )
}

const Form = styled('div')`
  input {
    width: 450px;
    &:focus {
      border-color: #000;
      box-shadow: none;
    }
  }
`

export default EmailForm
