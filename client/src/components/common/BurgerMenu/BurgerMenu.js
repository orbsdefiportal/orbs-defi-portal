import React, { useState } from "react";

import { Socials } from "../Socials";
import { AngleDown } from "../../../assets/components";
import { menuAddressLinks, headerSocials } from "../../../constants";
import { createIframe } from "../../../utils";
import classes from "./BurgerMenu.module.scss";

const BurgerMenu = ({ setIsOverflow }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHover, setIsHover] = useState("");
  const [isSwapLinks, setIsSwapLinks] = useState(false);
  const [isUniswapLinks, setIsUniswapLinks] = useState(false);

  const handleClick = () => {
    setIsOverflow(!showMenu);
    setShowMenu(!showMenu);
  };

  const handleOnClick = (index, type) => {
    let url =
      type === "swap" && index === 0
        ? "/balswapusdcorbs"
        : type === "swap" && index === 1
        ? "/uniswapethorbs"
        : type === "liquidity" && index === 0
        ? "/baladdusdcorbs"
        : "/uniaddethorbs";

    createIframe(index, type, url);
  };

  return (
    <>
      <div
        className={classes.burger}
        style={{ zIndex: showMenu ? 40 : 1 }}
        onClick={handleClick}
      >
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
      {/* <Menu /> */}
      <nav
        className={classes.nav}
        style={showMenu ? { transform: "translateX(0) " } : {}}
      >
        <ul>
          <li
            style={{
              padding: "2px 0",
              marginTop:
                isSwapLinks && isUniswapLinks
                  ? "108px"
                  : isSwapLinks || isUniswapLinks
                  ? "54px"
                  : "0px",
            }}
          >
            <span
              href="#"
              onMouseEnter={() => setIsHover("Swap")}
              onMouseLeave={() => setIsHover("")}
              onClick={() => setIsSwapLinks(!isSwapLinks)}
            >
              SWAP
              <div>
                <AngleDown isHover={isHover} name="Swap" />
              </div>
            </span>
            <div
              className={classes.dropdownContainer}
              style={{ display: isSwapLinks ? "flex" : "none" }}
            >
              {menuAddressLinks.map((item, index) => {
                return (
                  <span
                    key={item.pair}
                    onClick={() => handleOnClick(index, "swap")}
                  >
                    {item.pair}
                  </span>
                );
              })}
            </div>
          </li>
          <li style={{ padding: "2px 0" }}>
            <span
              href="#"
              name={"Add liquidity"}
              onMouseEnter={() => setIsHover("Add liquidity")}
              onMouseLeave={() => setIsHover("")}
              onClick={() => setIsUniswapLinks(!isUniswapLinks)}
            >
              ADD LIQUIDITY
              <div>
                <AngleDown isHover={isHover} name="Add liquidity" />
              </div>
            </span>
            <div
              className={classes.dropdownContainer}
              style={{ display: isUniswapLinks ? "flex" : "none" }}
            >
              {menuAddressLinks.map((item, index) => {
                return (
                  <span
                    key={item.pair}
                    onClick={() => handleOnClick(index, "swap")}
                  >
                    {item.pair}
                  </span>
                );
              })}
            </div>
          </li>
          <li>
            <a href="https://orbsdefi.substack.com/p/how-to-add-liquidity-on-uniswap">
              HOW-TO
            </a>
          </li>
          <li>
            <a href="https://paradigmfund.io/wp-content/uploads/2020/12/Combining-staking-and-liquidity-provisioning.pdf">
              RESEARCH
            </a>
          </li>
          <li>
            <a href="https://blog.orbsdefi.com/embed">
              + SUBSCRIBE FOR UPDATES
            </a>
          </li>
          <Socials data={headerSocials} />{" "}
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
