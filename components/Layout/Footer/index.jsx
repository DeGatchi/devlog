import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  // WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>ANTIDOTE</SocialLogo>
            {/* <WebsiteRights>
              SoulSwap © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/SoulSwapFinance"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/SoulSwapFinance"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://t.me/soulswapdefi"
                target="_blank"
                aria-label="Telegram"
              >
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink
                href="https://discord.gg/uDbZcHwzxX"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
