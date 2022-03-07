import Image from "../Images/Image";
import { Container, Content, CTA, CTALogo, Description } from "./Login.styles";
import { SignUp } from "../Buttons/Button.styles";
import { getAuth, onAuthStateChanged } from "../../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/home");
      }
    });
  }, []);
  
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogo>
            <Image src="/images/cta-logo-one.svg" alt="HULU DISNEY SPN logo" />
          </CTALogo>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogo>
            <Image
              src="/images/cta-logo-two.png"
              alt="Disney Pixar marvel starwars national geograpic logo"
              width="100%"
            />
          </CTALogo>
        </CTA>
      </Content>
    </Container>
  );
}
