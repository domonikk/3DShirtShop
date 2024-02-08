import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#362050",
  isLogoTexture: true,
  isLogoTexture2: false,
  isFullTexture: false,
  isFullTexture2: false,
  isFullTexture3: false,
  logoDecal: "/lost-logo.png",
  logoDecal2: "/lost-logo2.png",
  fullDecal: "/lost.png",
  fullDecal2: "/lost-text2.png",
  fullDecal3: "/lost-text3.png",
});

export default state;
