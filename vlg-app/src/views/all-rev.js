import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import BlogPostHeader from '../components/blog-post-header'
import './all-rev.css'

const AllRev = (props) => {
  return (
    <div className="all-rev-container">
      <Helmet>
        <title>AllRev - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="AllRev - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name2"></Navbar1>
      <BlogPostHeader rootClassName="blog-post-header-root-class-name"></BlogPostHeader>
    </div>
  )
}

export default AllRev
