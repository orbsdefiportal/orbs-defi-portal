// import icons from "./assets";
import telegram from "./assets/icons/telegram.svg";
import twitter from "./assets/icons/twitter.svg";
import community from "./assets/icons/community.svg";
import mail from "./assets/icons/mail.svg";

import { Telegram, Twitter, Community, Mail } from "./assets/components";

export const headerSocials = [
  {
    name: "Telegram",
    Icon: Telegram,
    link: "",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    link: "",
  },
];

export const footerSocials = [
  {
    name: "Twitter",
    Icon: Twitter,
    link: "",
  },
  {
    name: "Telegram",
    Icon: Telegram,
    link: "",
  },
  {
    name: "Community",
    Icon: Community,
    link: "",
  },
  {
    name: "Mail",
    Icon: Mail,
    link: "",
  },
];

export const list = [
  { title: "Volume (24h)", info: "$237.4 K" },
  { title: "Liquidity (now)", info: "$10M" },
  { title: "ROI (30 days)", info: "2%" },
  { title: "Swap fee", info: "0.1%" },
  { title: "Swaps", info: "1285" },
  { title: "Fee returns (i)", info: "10K" },
];

export const exchangeList = [
  { trading: "ETH-ORBS", exchange: "BITHUM", type: "CEX", price: 0.0122 },
  { trading: "USDC-ETH ", exchange: "BITHUM", type: "CEX", price: 0.0123 },
  { trading: "ETH-USDT", exchange: "Uniswap", type: "DEX", price: 0.0194 },
  { trading: "DAI-ETH", exchange: "Uniswap", type: "DEX", price: 0.0091 },
  { trading: "HKMT-USDT", exchange: "Bittrex", type: "DEX", price: 0.1999 },
  { trading: "HKMT-USDT", exchange: "Uniswap", type: "DEX", price: 0.0122 },
  { trading: "HKMT-USDT", exchange: "Bittrex", type: "DEX", price: 0.0159 },
  { trading: "HKMT-USDT", exchange: "Balancer", type: "DEX", price: 0.0094 },
  { trading: "HKMT-USDT", exchange: "Uniswap", type: "DEX", price: 0.0945 },
];

export const tableHeader = [
  {
    trading: "Trading pair",
    exchange: "exchange",
    type: "TYPE",
    price: "ORBS price ($)",
  },
];

export const sectionInfoContent = [
  {
    title: "Share pool fees",
    content:
      "When users exchange assets on Uniswap or Balancer using these pools, they pay fees. All the fees are distributed to liquidity providers.",
    linkName: "Understanding liquidity pool returns",
    link: "#",
  },
  {
    title: "Become a part of ORBS pool",
    content:
      "Add 50%/50% or 10/90 ORBS and largest ERC-20 token of your choice into a liquidity pool smart contract. You will get a token that represents ownership in the pool and a share of future exchange fees.",
    linkName: "How To Add Liquiditys",
    link: "#",
  },
  {
    title: "No lockup",
    content:
      "Exit liquidity pool anytime. Your shares are immidiately exchanged to underlying assets",
    linkName: "Remove Liquidity ",
    link: "#",
  },
];

export const formDescription =
  "We'll keep you informed about ORBS pools and De-fi R&D on Orbs platform";

export const footerInfo = [
  {
    title: "Not investment advice",
    content: `The content of this website does not constitute investment advice, financial advice, trading advice, or any other advice.
  Blocklytics will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. Blocklytics provides all information as is.`,
  },
  {
    title: "Orbs De-fi Platform",
    content: `Orbs De-Fi Portal is a web application for interacting with Orbs on Uniswap, Balancer with cryptocurrency pricing data provided by Coingecko`,
  },
];
