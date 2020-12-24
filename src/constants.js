// import icons from "./assets";
import telegram from "./assets/icons/telegram.svg";
import twitter from "./assets/icons/twitter.svg";
import community from "./assets/icons/community.svg";
import mail from "./assets/icons/mail.svg";
import {
  GET_POOL_INFO_BALANCER,
  GET_POOL_INFO_UNISWAP,
} from "./contex/dataQuery";

import { Telegram, Twitter, Community, Mail } from "./assets/components";

export const headerSocials = [
  {
    name: "Telegram",
    Icon: Telegram,
    link: "https://t.me/Paradigm_Fund",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    link: "https://twitter.com/DefiOrbs",
  },
];

export const footerSocials = [
  {
    name: "Twitter",
    Icon: Twitter,
    link: "https://twitter.com/DefiOrbs",
  },
  {
    name: "Telegram",
    Icon: Telegram,
    link: "https://t.me/Paradigm_Fund",
  },
  {
    name: "Community",
    Icon: Community,
    link: "https://community.orbs.network/",
  },
  {
    name: "Mail",
    Icon: Mail,
    link: "mailto:parters@paradigmfund.io",
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
    link:
      "https://orbsdefi.substack.com/p/how-to-withdraw-liquidity-from-balancer",
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

export const traidingPair = [
  {
    pair: "USDC/ORBS",
    id: "0x795dfdfd413c4a9492cef5b58723f9fb3c8af624",
    query: GET_POOL_INFO_BALANCER,
    clientName: "balancer",
  }, 
  {
    pair: "ETH/ORBS",
    id: "0xc98b3b8c7cc0d7d925d1a407347b845d9f001391",
    query: GET_POOL_INFO_UNISWAP,
    clientName: "uniswap",
  },
  {
    pair: "USDT/ORBS",
    id: "0x795dfdfd413c4a9492cef5b58723f9fb3c8af624",
    clientName: "coinGecko",
  },
];

export const tradeId = { ETH: "ethereum", USDC: "usd-coin" };


export const menuAddressLinks = [
  {
    pair: "USDC/ORBS",
    swap: `https://balancer.exchange/#/swap`,
    liquidity: `https://pools.balancer.exchange/#/pool/0x795dfdfd413c4a9492cef5b58723f9fb3c8af624/`,
    linkliquidity: `https://orbsdefi.substack.com/p/how-to-add-liquidity-to-balancer`,
    swapName: `Link`,
    liquidityName: `How to add liquidity to Balancer?`,
  },
  {
    pair: "ETH/ORBS",
    swap: `https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&inputCurrency=0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa`,
    liquidity: `https://app.uniswap.org/#/add/ETH/0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa`,
    linkliquidity: `https://orbsdefi.substack.com/p/how-to-add-liquidity-on-uniswap`,
    liquidityName: `How to add liquidity on Uniswap?`,
    swapName: `Link`,
  },
];
