import { memo } from "react";
import { Form, Input, Button } from "./gif-search.styled";

const GifSearch = memo(({changeKeyword}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const keyword = form.elements.keyword.value;

    if (keyword.trim() !== "") {
      form.reset();

      changeKeyword(keyword);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="keyword" />
      <Button type="submit">Пошук</Button>
    </Form>
  );
});

export default GifSearch;
