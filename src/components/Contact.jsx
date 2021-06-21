import React from "react";

function Contact() {
  return (
    <div class="container" className="Contact">
      <section id="contact">
        <h2>CONTACT ME</h2>

        <form action="https://formspree.io/f/xvodpjzd" method="post">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              placeholder="Patrick"
              required
            />
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              placeholder="Star"
              required
            />
          </div>

          <div class="form-group">
            <label for="emailInput">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              name="email"
              placeholder="mayomaestro@underthe.rock"
              required
            />
          </div>

          <div class="form-group">
            <label for="messageInput">Message</label>
            <textarea
              class="form-control"
              id="messageInput"
              name="message"
              maxlength="500"
              placeholder="Is mayonaise an instrument?"
              rows="3"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
export default Contact;
