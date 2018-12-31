import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Button, Container } from "rebass";
import { StyledRebassButton } from "../components/StyledRebassButton";

const MediaThemedH1 = styled.h1`
  ${props => props.theme.media.desktop`color: ${props.theme.fifth}`};
  ${props => props.theme.media.laptop`color: ${props.theme.second}`};
  ${props => props.theme.media.tablet`color: ${props.theme.fourth}`};
  ${props => props.theme.media.phone`color: ${props.theme.main}`};
`;

const IndexPage = () => (
  <div>
    <MediaThemedH1>Richard Hamming on Luck</MediaThemedH1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <Container>
        <blockquote>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck. The particular thing you do is luck, but that you do
          something is not.
        </blockquote>
      </Container>
    </div>
    <StyledRebassButton
      is='a'
	    href='#'
      children='Click Me'>
    </StyledRebassButton>
  </div>
);

export default IndexPage;
