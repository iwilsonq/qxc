import React from 'react'

const EmailForm = () => {
  return (
    <div>
      <h3>Wanna learn more?</h3>
      <p>Sign up for updates</p>
      <form action="https://formspree.io/iwilsonq@gmail.com" method="POST">
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default EmailForm
