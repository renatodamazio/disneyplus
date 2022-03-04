import React from "react";
import { Container, Content, CTA, CTALogoOne } from "./Login.styles";
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
        </CTA>
      </Content>
    </Container>
  );
}
