import React from 'react'
import './MyBlogs.css'
import theme_pattern from '../../assets/themepattern.png'

const MyBlogs = () => {
  return (
        <div className="myblogs">
            <div className="myblog-title">
                <h1>My Blogs</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="myblog-container">
                </div>    
        </div>
  )
}

export default MyBlogs