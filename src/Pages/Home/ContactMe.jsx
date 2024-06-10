import React, { useState } from 'react';

export default function ContactMe() {
  const [topic, setTopic] = useState('General Inquiry');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTopicChange = (e) => {
    const selectedTopic = e.target.value;
    setTopic(selectedTopic);
    setShowOtherInput(selectedTopic === 'Other (Please specify)');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 1000);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Validate phone number using regular expression
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    if (!validatePhoneNumber(phoneNumber)) {
      // Display error message or take appropriate action
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="Contact--heading">
        <h2>Contact Me</h2>
        </div>
        <p className="text-lg">
          Reach out to me through the contact form on my portfolio website to start a conversation and explore collaboration opportunities.
        </p>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              pattern="[A-Za-z]+"
              title="Please enter only alphabets"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              pattern="[A-Za-z]+"
              title="Please enter only alphabets"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
              onChange={handlePhoneNumberChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            value={topic}
            onChange={handleTopicChange}
            required
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Collaboration">Project Collaboration</option>
            <option value="Mentorship">Mentorship</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Event Invitation">Event Invitation</option>
            <option value="Job Related Inquiry">Job Related Inquiry</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Other (Please specify)">Other (Please specify)</option>
          </select>
        </label>
        {showOtherInput && (
          <label htmlFor="other-topic" className="contact--label">
            <span className="text-md">Please specify</span>
            <input
              type="text"
              className="contact--input text-md"
              name="other-topic"
              id="other-topic"
              required
            />
          </label>
        )}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
        </div>
      </form>
      {isSubmitted && (
        <div className="popup-message">
          <p>Message successfully sent!</p>
        </div>
      )}
    </section>
  );
}
