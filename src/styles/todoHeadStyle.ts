import styled from "styled-components";
import { color } from "./colorPalette";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  border-bottom: 1px solid ${color.lightGray};

  h1 {
    font-size: 1.7rem;
    font-weight: 600;
    color: ${color.black};
  }

  p {
    margin-top: 15px;

    color: ${color.black};
    font-size: 1.2rem;
  }

  .task {
    color: ${color.blueGray};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
