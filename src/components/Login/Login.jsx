import React from "react";
import { Container, Content, CTA, CTALogoOne } from "./Login.styles";
import Image from "../Images/Image";

export default function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne>
            <Image src="/images/cta-logo-one.svg" alt="CTA lOGO" />
          </CTALogoOne>
        </CTA>
      </Content>
    </Container>
  );
}
