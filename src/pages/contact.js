import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-info">
          <article className="contact-info">
            <h3>Let's talk Nounders...</h3>
            <p>
              Retro beard 3 wolf moon photo booth coloring book. Hashtag food
              truck tofu twee drinking vinegar butcher echo park bitters tumblr
              yes plz vinyl gentrify irony praxis.
            </p>
            <p>
              PBR&B shoreditch prism, blue bottle leggings mlkshk gluten-free
              edison bulb taiyaki chambray paleo.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Name</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
