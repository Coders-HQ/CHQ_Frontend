import React from "react";
import {
  FaqContainer,
  FaqH1,
  FaqWrapper,
  FaqCard,
  FaqH2,
  FaqP,
  FaqDarkH2,
} from "./faqElements";

const faqSection = () => {
  return (
    <FaqContainer id="faq">
      <FaqH1>FAQs</FaqH1>
      <FaqDarkH2>
        Answers to common questions. If you have any other inquiries, please get
        in touch.
      </FaqDarkH2>
      <FaqWrapper>
        <FaqCard>
          <FaqH2>Who created this platform?</FaqH2>
          <FaqP>
            It's an initiative by The Office of the Minister of AI of The UAE
            National AI Program.
          </FaqP>
        </FaqCard>
        <FaqCard>
          <FaqH2>Who created this platform?</FaqH2>
          <FaqP>
            It's an initiative by The Office of the Minister of AI of The UAE
            National AI Program.
          </FaqP>
        </FaqCard>
        <FaqCard>
          <FaqH2>Who created this platform?</FaqH2>
          <FaqP>
            It's an initiative by The Office of the Minister of AI of The UAE
            National AI Program.
          </FaqP>
        </FaqCard>
        <FaqCard>
          <FaqH2>Who created this platform?</FaqH2>
          <FaqP>
            It's an initiative by The Office of the Minister of AI of The UAE
            National AI Program.
          </FaqP>
        </FaqCard>
        <FaqCard>
          <FaqH2>Who created this platform?</FaqH2>
          <FaqP>
            It's an initiative by The Office of the Minister of AI of The UAE
            National AI Program.
          </FaqP>
        </FaqCard>
        <FaqCard>
          <FaqH2>Who created this platform?</FaqH2>
          <FaqP>
            It's an initiative by The Office of the Minister of AI of The UAE
            National AI Program.
          </FaqP>
        </FaqCard>
      </FaqWrapper>
    </FaqContainer>
  );
};

export default faqSection;
