import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') {
      // Handle successful submission, e.g., update a state or perform any other action
      console.log('Newsletter subscription successful:', email);
    }
  }, [status, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (email && email.indexOf("@") > -1) {
      try {
        const response = await fetch("http://localhost:5000/newsletter/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ EMAIL: email }),
        });

        // Assuming your backend returns a response with a `status` and `message`
        const result = await response.json();

        if (result.status === 'success') {
          // Do not clear the email field
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
