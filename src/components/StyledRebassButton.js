import styled from "styled-components";
import { Button } from "rebass";

//prettier-ignore
export const StyledRebassButton = styled(Button)`
  margin: 1em;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.third};
  background-image: linear-gradient(transparent, rgb(0, 119, 238));
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  &:hover {
    color: ${props => props.theme.fourth};
    background-color: ${props => props.theme.main};
  }
`;
