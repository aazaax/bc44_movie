import React from "react";
import { Desktop, Mobile } from "../../responsive/responsive";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  return (
    <div>
      <Desktop>
        <FooterDesktop />
      </Desktop>
      <Mobile>
        <FooterMobile />
      </Mobile>
    </div>
  );
}
