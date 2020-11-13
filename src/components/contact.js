import React from 'react';



const Contact = () => {
    return(
        <section id="contact-section">
      <h2 class="text-important text-center">Contact Me</h2>
      <form>
        <label>FUll Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea cols="40" row="5"></textarea>
        <button>Send</button>
      </form>
    </section>

    );
}
export default Contact;