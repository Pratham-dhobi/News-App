import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, img_url, news_url} = this.props;

    const myStyle = {
      width: '18rem'
    }
    return (
      <div className='my-3'>
        <div className="card" style={myStyle}>
          <img className="card-img-top" src={!img_url?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IKoEzXY_LtXgQxsdGFEyJ4aso8GOneH6dm0p7qpGzw&s':img_url} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={news_url} target='_blank' className="btn btn-primary btn-sm">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
