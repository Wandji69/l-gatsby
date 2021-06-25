import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby';


const index = () => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <p>This is a Gatsby static site</p>
      <p>Need a Develop? <Link to="/contact">Contact us</Link></p>
    </Layout>
  )

}

export default index
