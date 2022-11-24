import styled from "styled-components";
import { color } from "./colorPalette";

export const List = styled.ul`
  overflow-y: auto;

  height: 100vh;
  margin-top: 3rem;
  padding: 0 3rem;
`;

export const ItemBlock = styled.div<{ important: boolean }>`
  display: flex;
  align-items: center;

  height: 40px;
  margin-bottom: 0.8rem;

  font-weight: ${({ important }) => important && "600"};

  .checkBox {
    display: flex;
    flex: 1;

    color: ${color.black};
    font-size: 1.5rem;

    cursor: pointer;

    span {
      margin-top: 3px;
      font-size: 1.1rem;
    }

    .check {
      color: ${color.blue};
    }

    .itemText {
      margin-left: 1rem;
    }

    .itemCheckText {
      margin-left: 1rem;

      color: ${color.blueGray};
      text-decoration: line-through;
    }
  }
`;

export const ImportantButton = styled.button`
  margin-right: 0.8rem;

  color: ${color.yellow};
  font-size: 1.8rem;

  cursor: pointer;
`;

export const EditButton = styled.button`
  margin-right: 0.8rem;

  color: ${color.blueGray};
  font-size: 1.8rem;

  cursor: pointer;
`;

export const RemoveButton = styled.button`
  color: ${color.lightRed};
  font-size: 1.8rem;

  cursor: pointer;
`;
