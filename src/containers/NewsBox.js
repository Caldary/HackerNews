import React, { Component } from "react";
import NewsList from '../components/NewsList';

class NewsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
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

  render() {
    return (
      <NewsList />
    )
  }
}

export default NewsBox;