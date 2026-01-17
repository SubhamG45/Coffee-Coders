import "./Contact.css";

function Contact() {
  return (
    <>
      <header>
        <h1>🌱 Agri Development Contact</h1>
        <p>We are here to help farmers grow smarter and better!</p>
      </header>

      <main>
        <section className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Reach out to us for suggestions, partnerships, or farming advice. We love hearing from our community!
            </p>
            <ul>
              <li><strong>Address:</strong> 123 Green Field Road, Butwal, Nepal</li>
              <li><strong>Phone:</strong> +977 980-XXXXXXX</li>
              <li><strong>Email:</strong> info@agridvlp.com</li>
              <li>
                <strong>Follow Us:</strong>{" "}
                <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Agri Development. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
