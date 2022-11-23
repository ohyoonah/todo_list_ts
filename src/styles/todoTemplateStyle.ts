import styled from "styled-components";
import { color } from "./colorPalette";

export const Wapper = styled.section`
  overflow: hidden;
  position: relative;

  width: 512px;
  height: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 16px;

  background: white;
  box-shadow: 8px 8px 30px ${color.black};
`;

export const TodosBlock = styled.div<{ isEdit: boolean }>`
  opacity: ${({ isEdit }) => isEdit && "0.2"};
`;
