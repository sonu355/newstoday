import React from 'react'
import NewsItem from "./NewsItem"

const News = () => {
  return (
    <div className='container my-3'>
        <h2>NewsToday</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="Hello"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Hello"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Hello"/>
            </div>
        </div>
    </div>
  )
}

export default News
