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

  handleNextBtn = () => {
    console.log('previous btn clicked');
  }

  handlePrevBtn = () => {
    console.log('next btn clicked');
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
        <button type="button" class="btn btn-primary" onClick={handlePrevBtn}>&larr; Previous</button>
        <button type="button" class="btn btn-primary" onClick={handleNextBtn}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
