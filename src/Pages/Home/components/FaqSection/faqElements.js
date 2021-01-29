import styled from "styled-components";

export const FaqContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const FaqWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FaqCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const FaqH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 14px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FaqH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const FaqDarkH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 64px;
  color: #010606;
`;

export const FaqP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
