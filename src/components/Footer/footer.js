import React from "react";
import myImage from "../../images/TempLogo2.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <img src={myImage} alt="logo" className="logo" />
              LuisGoyone
            </SocialLogo>
            <WebsiteRights>
              LuisGoyone © {new Date().getFullYear()} All right reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/luisgoyoneee/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/luisgoyone/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/luisgoyone"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/luis-goyone-a99a97212/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
