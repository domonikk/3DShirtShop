import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#9FFF76",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/brat.png",
  fullDecal: "/brat-text.png",
});

export default state;
