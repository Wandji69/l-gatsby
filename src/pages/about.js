import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const about = () => {
    return (
        <Layout>
            <title>About the Author</title>
            <h1>About Author</h1>
            <p>This is about the author of this blog</p>
            <p>Want to Connect? <Link to="/contact">Contact us</Link></p>
        </Layout>

    )
}

export default about
