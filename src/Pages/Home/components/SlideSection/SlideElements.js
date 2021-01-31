import styled from "styled-components";

export const SlideContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const SlideWrapper = styled.div`
  --slider-height-percentage: 60%;
  --slider-transition-duration: 700ms;
  --organic-arrow-thickness: 4px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 52px;
  --organic-arrow-color: #ffffff;
  --control-button-width: 5%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: #ff2e2e;
  --control-bullet-active-color: #ff0000;
  --loader-bar-color: #ff0000;
  --loader-bar-height: 6px;
`;
