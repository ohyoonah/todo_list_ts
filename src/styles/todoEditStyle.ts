import styled from "styled-components";
import { color } from "./colorPalette";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  width: 70%;
  height: 50%;
  border-radius: 16px;

  background: white;
  box-shadow: 8px 8px 15px var(--black);

  color: ${color.black};
  text-align: center;

  h2 {
    position: absolute;
    top: 0;

    width: 100%;
    height: 60px;
    border-radius: 16px 16px 0 0;

    background: ${color.blueGray};

    font-size: 1.8rem;
    font-weight: 700;
    line-height: 60px;
  }

  input {
    width: 80%;
    height: 40px;
    padding-left: 1rem;
    border: 0;
    outline: 0;
    border-bottom: 5px solid ${color.lightGray};

    font-size: 1.2rem;
  }

  div {
    display: flex;
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 60px;

    .updateButton {
      flex: 1;

      border: 0;
      border-radius: 0 0 0 16px;

      background: ${color.blueGray};

      font-size: 1rem;
      font-weight: 700;

      cursor: pointer;

      &:hover {
        background: ${color.lightGray};
      }
    }
    .closeButton {
      flex: 1;

      border: 0;
      border-radius: 0 0 16px 0;

      background: ${color.blueGray};

      font-size: 1rem;
      font-weight: 700;

      cursor: pointer;

      &:hover {
        background: ${color.lightGray};
      }
    }
  }
`;
