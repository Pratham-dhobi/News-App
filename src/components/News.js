import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf7fa7ad3b3145758626aa9d27e88968&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  handleNextBtn = async () => {

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf7fa7ad3b3145758626aa9d27e88968&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      });
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);

      this.setState({
        page: this.state.page+1,
        articles: parseData.articles,
        loading: false
      });
    }
  }

  handlePrevBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf7fa7ad3b3145758626aa9d27e88968&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    
    this.setState({
      loading: true
    });

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    });
  }

  render() {
    let {mode} = this.props;
    
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{fontFamily: 'Roboto', fontWeight: 'bold'}}>India Tv - Top HeadLines</h1>
        {this.state.loading && <Spinner mode={mode}/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map(element=> {
          return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0, 45) + '...':""} description={element.description?element.description.slice(0, 99)+ '...':""} img_url={element.urlToImage} news_url={element.url} mode={mode} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-primary my-3" disabled={this.state.page<=1} onClick={this.handlePrevBtn}>&larr; Previous</button>
        <button type="button" className="btn btn-primary my-3" onClick={this.handleNextBtn} disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults/18)}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
