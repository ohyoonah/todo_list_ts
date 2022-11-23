import styled, { css } from "styled-components";
import { color } from "./colorPalette";

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border: 0;
  outline: 0;

  background: ${color.lightGray};

  color: white;
  font-size: 1rem;

  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button<{ visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.7rem;
  top: 6rem;

  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  outline: 0;

  background: ${color.blue};

  color: white;
  font-size: 2.3rem;

  transition: 0.125s all ease-in;
  cursor: pointer;

  &:hover {
    background: ${color.blueGray};
  }

  &:active {
    background: ${color.red};
    transform: rotate(50deg);
  }

  ${({ visible }) =>
    visible &&
    css`
      background: ${color.red};
      transform: rotate(45deg);

      &:hover {
        background: ${color.lightRed};
      }
    `}
`;
