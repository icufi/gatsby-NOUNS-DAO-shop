import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>since the 1500s versions of Lorem Ipsum</h2>
            <p>
              45 BC. This book is a treatise on the theory of ethics, very
              popular during the Renaissance. The first line of Lorem Ipsum,
              "Lorem
            </p>
            <p>
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage src="../assets/images/nouns-hat.jpg" alt="nouns hat" className='about-img' placeholder='blurred'/>
        </section>
      </main>
    </Layout>
  )
}

export default About