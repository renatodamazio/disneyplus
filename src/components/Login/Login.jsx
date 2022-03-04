import React from "react";
import {
  Container,
  Content,
  CTA,
  CTALogoOne,
  Description,
} from "./Login.styles";
import { SignUp } from "../Buttons/Button.styles";
import Image from "../Images/Image";

export default function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne>
            <Image src="/images/cta-logo-one.svg" alt="CTA lOGO" />
          </CTALogoOne>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
        </CTA>
      </Content>
    </Container>
  );
}
