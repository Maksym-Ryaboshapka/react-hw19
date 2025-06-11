import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(3, 200px);
  gap: 25px;
  justify-content: center;
`;

export const Item = styled.li``;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
`;
