import { memo } from "react";

import { List, Item, Img, Text } from "./git-list.styled";

const GifList = memo(({ gifs }) => {
  return (
    <>
      {gifs.length > 0 ? (
        <List>
          {gifs.map((gif) => {
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
});

export default GifList;
