import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, img_url, news_url, mode} = this.props;

    return (
      <div className='my-3'>
        <div className="card hover-shadow w-100" style={{width: '18rem',backgroundColor: mode === 'light'?'white':'rgb(215 215 215)'}}>
          <img className="card-img-top" src={!img_url?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IKoEzXY_LtXgQxsdGFEyJ4aso8GOneH6dm0p7qpGzw&s':img_url} alt=""/>
          <div className="card-body">
            <h5 className="card-title" style={{fontFamily: '-moz-initial', fontWeight: 'bold', fontSize: '20px'}}>{title}</h5>
            <p className="card-text" style={{fontFamily: '-moz-initial', fontsize: '16px', textAlign: 'justify'}}>{description}</p>
            <a href={news_url} target='_self' className="btn btn-dark btn-sm">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
