import { Component } from "react";

import { Form, Input, Button } from "./gif-search.styled";

export default class GifSearch extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const keyword = form.elements.keyword.value;

    if (keyword.trim() !== "") {
      form.reset();

      this.props.changeKeyword(keyword);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" name="keyword" />
        <Button type="submit">Пошук</Button>
      </Form>
    );
  }
}
