import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles : [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf7fa7ad3b3145758626aa9d27e88968';
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles});
  }

  handleNextBtn = async () => {
    console.log('next btn clicked');

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf7fa7ad3b3145758626aa9d27e88968&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState = {
      page: this.state.page+1,
      articles: parseData.articles
    }
  }

  handlePrevBtn = async () => {
    console.log('previous btn clicked');

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf7fa7ad3b3145758626aa9d27e88968&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState = {
      page: this.state.page - 1,
      articles: parseData.articles
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>India Tv - Top HeadLines</h1>
        <div className="row">
        {this.state.articles.map(element=> {
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0, 45) + '...':""} description={element.description?element.description.slice(0, 99)+ '...':""} img_url={element.urlToImage} news_url={element.url}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-primary" disabled={this.state.page<=1} onClick={this.handlePrevBtn}>&larr; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
