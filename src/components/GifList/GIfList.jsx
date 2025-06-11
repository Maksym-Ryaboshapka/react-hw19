import { Component } from "react";

import { List, Item, Img, Text } from "./git-list.styled";

export default class GifList extends Component {
  render() {
    return (
      <>
        {this.props.gifs.length > 0 ? (
          <List>
            {this.props.gifs.map((gif) => {
              return (
                <Item key={gif.id}>
                  <Img src={gif.images.fixed_height.url} alt={gif.title} />
                </Item>
              );
            })}
          </List>
        ) : (
          <Text>Немає знайдених GIF</Text>
        )}
      </>
    );
  }
}
