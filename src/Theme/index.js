import React from "react";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { useDarkModeManager } from "../contexts/LocalStorage";
import styled from "styled-components";
import { Text } from "rebass";
import "bootstrap/dist/css/bootstrap.css";

export default function ThemeProvider({ children }) {
  const [darkMode] = useDarkModeManager();

  return (
    <StyledComponentsThemeProvider theme={theme(darkMode)}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

const theme = (darkMode, color) => ({
  customColor: color,
  textColor: darkMode ? color : "black",

  panelColor: darkMode ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
  backgroundColor: darkMode ? "#06070b" : "#F7F8FA",

  uniswapPink: darkMode ? "#ff007a" : "black",

  concreteGray: darkMode ? "#292C2F" : "#FAFAFA",
  inputBackground: darkMode ? "#1F1F1F" : "#FAFAFA",
  shadowColor: darkMode ? "#000" : "#2F80ED",
  mercuryGray: darkMode ? "#333333" : "#E1E1E1",

  text1: darkMode ? "#FAFAFA" : "#1F1F1F",
  text2: darkMode ? "#C3C5CB" : "#565A69",
  text3: darkMode ? "#6C7284" : "#888D9B",
  text4: darkMode ? "#565A69" : "#C3C5CB",
  text5: darkMode ? "#2C2F36" : "#EDEEF2",

  // special case text types
  white: "#FFFFFF",

  // backgrounds / greys
  bg1: darkMode ? "#06070b" : "#FAFAFA",
  bg2: darkMode ? "#2C2F36" : "#F7F8FA",
  bg3: darkMode ? "#40444F" : "#EDEEF2",
  bg4: darkMode ? "#565A69" : "#CED0D9",
  bg5: darkMode ? "#565A69" : "#888D9B",
  bg6: darkMode ? "#000" : "#FFFFFF",

  //specialty colors
  modalBG: darkMode ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.6)",
  advancedBG: darkMode ? "#131723" : "rgba(255,255,255,0.4)",
  onlyLight: darkMode ? "#178af5;" : "transparent",
  divider: darkMode ? "rgba(43, 43, 43, 0.435)" : "rgba(43, 43, 43, 0.035)",

  //primary colors
  primary1: darkMode ? "#2172E5" : "#ff007a",
  primary2: darkMode ? "#3680E7" : "#FF8CC3",
  primary3: darkMode ? "#4D8FEA" : "#FF99C9",
  primary4: darkMode ? "#376bad70" : "#F6DDE8",
  primary5: darkMode ? "#153d6f70" : "#FDEAF1",

  // color text
  primaryText1: darkMode ? "#6da8ff" : "#ff007a",

  // secondary colors
  secondary1: darkMode ? "#2172E5" : "#ff007a",
  secondary2: darkMode ? "#17000b26" : "#F6DDE8",
  secondary3: darkMode ? "#17000b26" : "#FDEAF1",

  shadow1: darkMode ? "#000" : "#2F80ED",

  // other
  red1: "#FF6871",
  green1: "#27AE60",
  yellow1: "#FFE270",
  yellow2: "#F3841E",
  link: "#2172E5",
  blue: "2f80ed",

  background: darkMode
    ? "black"
    : `radial-gradient(50% 50% at 50% 50%, #ff007a30 0%, #fff 0%)`,
});

const TextWrapper = styled(Text)`
  color: ${({ color, theme }) => theme[color]};
`;

export const TYPE = {
  main(props) {
    return (
      <TextWrapper fontWeight={500} fontSize={14} color={"text1"} {...props} />
    );
  },

  body(props) {
    return (
      <TextWrapper fontWeight={400} fontSize={14} color={"text1"} {...props} />
    );
  },

  small(props) {
    return (
      <TextWrapper fontWeight={500} fontSize={11} color={"text1"} {...props} />
    );
  },

  header(props) {
    return <TextWrapper fontWeight={600} color={"text1"} {...props} />;
  },

  largeHeader(props) {
    return (
      <TextWrapper fontWeight={500} color={"text1"} fontSize={24} {...props} />
    );
  },

  light(props) {
    return (
      <TextWrapper fontWeight={400} color={"text3"} fontSize={14} {...props} />
    );
  },

  pink(props) {
    return (
      <TextWrapper
        fontWeight={props.faded ? 400 : 600}
        color={props.faded ? "text1" : "text1"}
        {...props}
      />
    );
  },
};

export const Hover = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`;

export const ThemedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  position: absolute;
  top: 0px;
  left: 0px;
  /* z-index: ; */

  transform: translateY(-110vh);
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Poppins', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Poppins', sans-serif; }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;    
    background-color: ${({ theme }) => theme.bg6};
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: none
    }
  }

  
.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;
  

  & > * {
    width: 100% !important;
  }
}


  html {
    font-size: 1rem;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
  
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');


/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #353535;
  border-radius: 6px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #707070; 
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777777; 
}

:root {
  font-size: 14px;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #131723;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
  margin-bottom: 0;
}

ul, li {
  list-style: none;
}

.btn.btn-purple {
  background-color: #E00E8B !important;
}
.header {
  padding: 8px 20px;
  background-color: #030823;
  color: white;
}

.header p {
  font-size: 18px;
}

.header .btn {
  font-size: 20px;
}

.header .wallet-info {
  background: #4f51586b;
  padding: 6px 16px;
  border-radius: 12px;
  box-shadow: 5px inset #06070B;
  cursor: pointer;
}
.header #basic-navbar-nav {
  padding-left: calc(25% - 200px);
}
.header .wallet-info p {
  font-size: 14px;
}
.header .navbar-nav.active {
  padding: 5px 25px;
  border-radius: 12px;
  background: #06070B !important;
}
.header .navbar-nav.active a {
  color: #cec6e0;
}

.header a.header-link {
  font-size: 18px;
  color: white;
  text-decoration: none;
}

.footer {
  background: #131723;
  color: white;
  border-top: #707070;
}

.swap-content {
  max-width: 550px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 120px;
  z-index: 9;
}

.swap-content .tab-box {
  display: flex;
  justify-content: center;
}

.swap-content .tab {
  display: flex;
  justify-content: center;
  background-color: #131723;
  padding: 4px 8px;
  border-radius: 24px;
}

.swap-content .tab .tab-item a.tab-link {
  display: block;
  padding: 8px 25px;
  color: white;
  border-radius: 24px;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1rem;
  position: relative;
}

.swap-content .tab .tab-item a.tab-link.active,
.swap-content .tab .tab-item a.tab-link:hover {
  background-color: #06070B;
}

.swap-content .tab .tab-item a.tab-link span {
  padding: 0.35em 0.65em;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  position: absolute;
  top: 0;
  right: 10px;
}

.swap-content .swap-modal {
  background-color: #131723;
  color: #CEC6E0;
  margin-bottom: 24px;
  padding: 12px 18px;
  border-radius: 24px;
}

.swap-content .swap-input {
  background-color: #06070B;
  margin-bottom: 1rem;
  padding: 14px 18px;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 600;
}

.swap-content .swap-input .max-button {
  padding-left: 18px;
  font-size: 18px;
  color: #E00E8B;
  text-decoration: none;
  cursor: pointer;
}

.swap-content .swap-note {
  padding: 12px;
  border-radius: 8px;
  background: #E00E8B11;
  border: 1px solid #e00e8b42;
  font-size: 14px;
}

.swap-content .swap-button {
  border: 1px solid #E00E8B;
  font-size: 18px;
}

.swap-content .fee-breakdown {
  background-color: #131723;
  color: #CEC6E0;
  padding: 10px 12px;
  border-radius: 24px;
}

.swap-content .token-selector {
  display: flex;
  cursor: pointer;
}

.token-selector img {
  margin-left: 5px;
  margin-right: 5px;
}

input.swap-input-text {
  display: flex;
  width: 0px;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: transparent;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
}

.loading-modal h6{
  color: white;
}

.value-top-bar span {
  color: #849FB4;
  font-size: 13px;
}

.value-top-bar span.value {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
}

span.value.last-value {
  color: #FF4E5A;
}

span.value.high-value {
  color: #32D513;
}

span.value.low-value {
  color: #FF3D3D;
}

span.value.hour-value {
  color: #46BBFF;
}

span.value.market-value {
  color: #D9D42C;
}

.accordion {
  background: transparent;
}

.accordion-item {
  border: 0px;
  background: transparent;
}

.accordion-item-header,
.accordion-item-content {
  padding: 15px 8px;
  border: 1px solid #272727;
}
.accordion-item:not(:first-child) .accordion-item-header {
  border-top: 0px;
}

.accordion-item .accordion-item-header.expired {
  background-color: #311E20;
}

.accordion-item-content {
  border-top: 0px;
}

.accordion-item-content {
  background-color: #212634;
}

.wallet-address {
  color: #4D97EB;
}

.accordion-item .transaction-time {
  color: #949494;
}

.accordion-item button {
  height: fit-content;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333333AA;
}

.modal-dialog {
  z-index: 9999999;
  width: 100%;
  padding: 20px;
}

.modal .modal-header {
  border-bottom-color: #313131;
}

.modal .modal-title {
  justify-content: center;
  width: 100%;
  color: white;
}
.modal .modal-dialog .modal-content {
  background-color: #131723;
  border: 1px solid #313131;
  border-radius: 24px;
}

.modal .modal-body {
  margin-bottom: 1rem;
}

.modal button.close {
  background: transparent;
  color: #FFFFFF;
  border: none;
  outline: none;
}

.modal button.close span {
  font-size: 32px;
}

.wallet-items .wallet-item {
  padding: 18px 20px;
  border: 1px solid #313131;
  border-radius: 14px;
  margin-bottom: 12px;
  cursor: pointer;
}

.wallet-items .wallet-item span {
  font-size: 16px;
}

.wallet-items .wallet-item img {
  width: 30px;
  height: 30px;
}

.wallet-items .wallet-item.disabled {
  background: #E00E8B08;
  border: 1px solid #e00e8b45;
  cursor: auto;
}

.from-coin, .to-coin {
  cursor: pointer;
}

input.token-search {
  padding: 8px 12px;
  width: 100%;
  background-color: #21263433;
  border: 1px solid #313131;
  border-radius: 8px;
  color: white;
  margin-bottom: 20px;
}

input.token-search:focus-visible {
  outline: none;
}

.token-items {
  height: 250px;
  overflow-y: auto;
}

.token-items .token-item {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 16px;
  border: 1px solid #131723;
  color: white;
  cursor: pointer;
}

.token-items .token-item img{
  border-radius: 50%;
}

.token-items .token-item.disabled,
.token-items .token-item.active {
  border: 1px solid #e00e8b42;
}

.token-items .token-item .token-name {
  margin-left: 12px;
  text-align: left;
}

.token-items .token-item .token-name p {
  font-size: 16px;
}  

.token-items .token-item .token-name span {
  color: #888888;
  font-size: 14px;
  font-weight: 400;
}

.modal-body {
  padding: 1.5rem 2rem;
}
.swap-transaction {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.custom-control.custom-radio {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  margin-bottom: 1rem;
  border: 1px solid #70707011;
  border-radius: 8px;
}

.custom-control.custom-radio.selected {
  background: #E00E8B08;
  border-color: #e00e8b59;
}
.custom-control.custom-radio input {
  width: 24px;
  height: 24px;
}

.custom-control.custom-radio label {
  margin-left: 0.5rem;
  text-align: left;
  font-size: 20px;
  cursor: pointer;
}
.custom-control.custom-radio.selected label {
  cursor: auto;
}
.custom-control.custom-radio label span {
  font-size: 14px;
  color: #888888;
}
/* completely hiding radio button */
input[type="radio"] {
  display: none;
}

/* simulate radiobutton appearance using pseudoselector */
input[type="radio"] + label:before {
  content: "";
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 24px;
  height: 24px;
  padding: 3px;
  margin-right: 5px;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid #bbbbbb;
  background-color: #e7e6e7;
  border-radius: 50%;
}

/* appearance of checked radiobutton */
input[type="radio"]:checked + label:before {
  background-color: red;
}

/* resetting default box-sizing */
*,
*:before,
*:after {
  box-sizing: border-box;
}

/* optional styles for centering radiobuttons */
.custom-control.custom-radio label {
  display: inline-flex;
  align-items: center;
}

.custom-control.custom-radio label .label-text {
  color: white;
  width: calc(100% - 40px);
  margin-left: 5px;
}

.transaction-modal {
  background-color: #131723;
  color: #CEC6E0;
  margin-bottom: 80px;
  padding: 25px;
  border-radius: 24px;
}

.transaction-modal .transaction-modal-label {
  text-align: left;
}
.second-note {
  font-size: 14px;
  color: #D3CAE7;
  margin-bottom: 3rem;
}

.badge-danger {
  position: absolute;
  background-color: #E00E8B;
  border-radius: 50%;
  font-size: 9px;
}

.swap-input-text {
  background-color: transparent;
  color: white;
  border: 0px;
  text-align: right;
}

.swap-input-text:focus-visible {
  outline: none;
}

.header .header-text-box {
  margin-left: 20px;
  font-weight: 500;
  font-size: 18px;
}

.swap-image {
  position: relative;
  width: 40px;
  height: 40px;
}
.from-coin-image,
.to-coin-image {
  position: absolute;
}
.from-coin-image {
  top: 0px;
  left: 0px;
}
.to-coin-image {
  top: 15px;
  left: 15px;
}

.link-icon {
  width: 12px;
}

.cursor-pointer {
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  .header p {
    font-size: 12px;
  }
}

img.logo {
  height: 45px;
}
img.mobile-logo {
  display: none;
  height: 45px;
}

@media only screen and (max-width: 519px) {
  img.logo {
    display: none;
  }  
  img.mobile-logo {
    display: block;
  }
}
@media only screen and (max-width: 757px) {

  .header p {
    font-size: 12px;
  }

  .footer p {
    font-size: 12px;
  }
}
.navbar-nav {
  align-items: center;
}

@media (max-width: 991px) {
  .navbar-nav {
    align-items: flex-end;
  }
  .navbar-nav p {
    font-size: 16px;
  }
  .header .navbar-nav button {
    font-size: 16px;
  }
}
`;
