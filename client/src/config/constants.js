import {
  swatch,
  logoShirt,
  stylishShirt,
  stylishShirt2,
  stylishShirt3,
  logoShirt2,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "logoShirt2",
    icon: logoShirt2,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
  {
    name: "stylishShirt2",
    icon: stylishShirt2,
  },
  {
    name: "stylishShirt3",
    icon: stylishShirt3,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  logo2: {
    stateProperty: "logoDecal2",
    filterTab: "logoShirt2",
  },

  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
  full2: {
    stateProperty: "fullDecal2",
    filterTab: "stylishShirt2",
  },
  full3: {
    stateProperty: "fullDecal3",
    filterTab: "stylishShirt3",
  },
};
