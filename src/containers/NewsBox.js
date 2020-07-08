import React, { Component } from "react";
import NewsList from '../components/NewsList';
import Header from '../components/Header';

class NewsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  fetchStories() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const promises = data.slice(0, 10).map((storyId) => {
          return (fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())
          )
        })
        Promise.all(promises)
          .then(data => this.setState({ news: data })
          )
      })
  }

  componentDidMount() {
    this.fetchStories()
  }

  handleSelectFilter(event){
    const filter = event.target.value;
    let filteredNews = [];
    if(filter === "title") {
      filteredNews = this.state.news.sort((el1, el2) => el1[filter].localeCompare(el2[filter]));
    }
    else {
      filteredNews = this.state.news.sort((el1, el2) => el2[filter] - el1[filter]);
    }
    this.setState({news: filteredNews});
  }

  render() {
    return (
      <div className="news-box">
        <h1>CodeClan Reddit2.0</h1>
        <Header defaultValue="default" handleSelectFilter={this.handleSelectFilter}/>
        <NewsList news={this.state.news}/>
      </div>
    )
  }
}

export default NewsBox;