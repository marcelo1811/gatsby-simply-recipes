import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-container">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label className="form-label" htmlFor="name">
                  your name
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="email">
                  your email
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="message">
                  your message
                </label>
                <textarea
                  className="form-textarea"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>
              <button className="btn block">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
