import React, { useState } from 'react';
import './style.css';

export default function App() {
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // to avoid form refresh on submit event which is browser's default behavior
    const form = e.target;

    //perform validation
    try {
      if (
        form.action !==
        'https://www.greatfrontend.com/api/questions/contact-form'
      ) {
        alert('Incorrect form action!');
        return;
      }
      if (form.method.toLowerCase() !== 'post') {
        alert('Incorrect form method!');
        return;
      }
      const formData = new FormData(form);
      const response = await fetch('abc.com', {
        method: 'post',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      alert(data);
    } catch (_) {
      alert('Error submitting form!');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        action="https://www.greatfrontend.com/api/questions/contact-form"
        method="POST"
      >
        <label htmlFor="name-input">
          Name
          <input id="name-input" type="text" name="name" />
        </label>
        <label htmlFor="email-input">
          Email
          <input id="email-input" type="email" name="email" />
        </label>
        <label htmlFor="message-input">
          Message
          <textarea id="message-input" name="message" />
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
