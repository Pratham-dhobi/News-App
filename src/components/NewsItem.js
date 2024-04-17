import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, img_url, news_url, mode, author, publishedAt} = this.props;

    return (
      <div className='my-3'>
        <div className="card hover-shadow w-100" style={{backgroundColor: mode === 'light'?'white':'rgb(215 215 215)'}}>
          <img className="card-img-top" src={!img_url?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IKoEzXY_LtXgQxsdGFEyJ4aso8GOneH6dm0p7qpGzw&s':img_url} alt="" style={{height: '200px'}}/>
          <div className="card-body" style={{ lineHeight: '1.5'}}>
            <h5 className="card-title" style={{fontFamily: "Roboto", fontWeight: 'bold', fontSize: '20px', height: '45px'}}>{title}</h5>
            <p className="card-text" style={{fontFamily: "Roboto", fontsize: '16px', textAlign: 'justify', height: '60px'}}>{description}</p>
            <span className="card-text"><small className='text-muted'>Author : {author===null?'UnKnown Pulisher':author}</small></span><br/>
            <span className="card-text"><small className='text-muted'>Date : {publishedAt}</small></span><br/>
            <a href={news_url} target='_blank' className="btn btn-dark btn-sm">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
