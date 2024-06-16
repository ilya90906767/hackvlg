import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import BlogPostHeader from '../components/blog-post-header'
import Timeline from '../components/timeline'
import './reviews.css'

const Reviews = (props) => {
  return (
    <div className="reviews-container">
      <Helmet>
        <title>Reviews - Feisty Peaceful Rhinoceros</title>
        <meta
          property="og:title"
          content="Reviews - Feisty Peaceful Rhinoceros"
        />
      </Helmet>
      <Navbar1 rootClassName="navbar1-root-class-name1"></Navbar1>
      <BlogPostHeader></BlogPostHeader>
      <Timeline rootClassName="timeline-root-class-name"></Timeline>
    </div>
  )
}

export default Reviews
