import { Component } from "react";
import axios from "axios";

import GifSearch from "./components/GifSearch/GifSearch";
import GifList from "./components/GifList/GIfList";

import apiJSON from "./api-key.json";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      keyword: "",
    };

    this.apiEndpoint = "https://api.giphy.com/v1/gifs/search";
    this.apiKey = apiJSON.key;
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.keyword === this.state.keyword) return;

    try {
      const res = await axios.get(
        `${this.apiEndpoint}?api_key=${this.apiKey}&q=${this.state.keyword}&limit=15`
      );

      this.setState({ gifs: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleChangeKeyword = (newKeyword) => {
    this.setState({ keyword: newKeyword });
  };

  render() {
    return (
      <div className="App">
        <GifSearch changeKeyword={this.handleChangeKeyword} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
