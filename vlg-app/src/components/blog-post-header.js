import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-header.css'

const BlogPostHeader = (props) => {
  return (
    <div
      className={`blog-post-header-content thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header-max-width thq-section-max-width">
        <div className="blog-post-header-header">
          <div className="blog-post-header-content1">
            <h1 className="thq-heading-1 blog-post-header-text">
              {props.blogPostTitle}
            </h1>
          </div>
          <div className="blog-post-header-content2">
            <div className="blog-post-header-avatar">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header-content3">
                <span className="blog-post-header-text1 thq-body-small">
                  {props.avatarName}
                </span>
                <div className="blog-post-header-time">
                  <span className="thq-body-small">{props.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt={props.blogPostImageAlt}
          src="/photo_2024-06-15_22-34-16-1400w.jpg"
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

BlogPostHeader.defaultProps = {
  date: '20 March 2024',
  blogPostImageAlt: 'PlaceholderImage3501',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  blogPostImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  readTime: '7min read',
  avatarImageAlt: 'a',
  avatarName: 'Анна Скворцова',
  blogPostTitle: 'Первая поездка в Волгоград',
  rootClassName: '',
}

BlogPostHeader.propTypes = {
  date: PropTypes.string,
  blogPostImageAlt: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  blogPostImageSrc: PropTypes.string,
  readTime: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  avatarName: PropTypes.string,
  blogPostTitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostHeader
