import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css'
const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
      
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_ox1yhdq',
          'template_p4qes8r',
          toSend,
          'user_GDE6DlUxxUxwx6IOVJndj'
        )
          .then((response) => {
            alert("Your email send successfully");
            console.log('SUCCESS!', response.status, response.text);
            
          })
          .catch((err) => {
            alert('email send fail')
            console.log('FAILED...', err);
            
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return (
        <section className='main-sec'>
            <div className="container">
                <div className="row">
                    <div className='col-md-6'>
                        <h2 className='contact'>Contact</h2>
                        <h4>Where to find me</h4>
                        <p>Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</p>
                        <ul>
                            <li>Email: <span className='link'>tania.cse43@gmail.com</span> </li>
                            <li>LinkedIn: <span className='link'>tania-developer</span></li>
                            <li>GitHub: <span className='link'>tania-developer</span></li>
                        </ul>
                        <p>You can also use this form on this page.</p>
                    </div>
                    <div className='col-md-6' >
                        <h3>Contact Form</h3>
                        <form onSubmit={onSubmit}>
                            <label>Full Name</label>
                            <input
                                type='text'
                                name='from_name'
                                placeholder='from name'
                                value={toSend.from_name}
                                onChange={handleChange}
                            />
                            {/* <input
                                type='text'
                                name='to_name'
                                placeholder='to name'
                                value={toSend.to_name}
                                onChange={handleChange}
                            /> */}
                            <label>Email</label>
                            <input
                                type='text'
                                name='reply_to'
                                placeholder='Your email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                            />
                            <label>Message</label>
                             <textarea
                                type='text-aria'
                                name='message'
                                placeholder='Your message'
                                value={toSend.message}
                                onChange={handleChange}
                            />
                            <button type='submit'>Submit</button>
                            
                        </form>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default Contact;