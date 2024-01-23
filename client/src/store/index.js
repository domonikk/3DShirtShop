import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#9FFF76",
  isLogoTextured: true,
  isFullTexture: false,
  logoDecal: "./brat.png",
  fullDecal: "./brat.png",
});

export default state;
