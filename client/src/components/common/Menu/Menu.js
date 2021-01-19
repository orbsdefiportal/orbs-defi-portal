import React, { useState, useRef } from "react";
import classes from "./Menu.module.scss";

import { useOutsideClick } from "../../common/UseOutsideClick/useOutsideClick";
import { AngleDown } from "../../../assets/components";
import { menuAddressLinks } from "../../../constants";
import { createIframe } from "../../../utils";

const Menu = ({ className = "", isFooter = false }) => {
  const [isHover, setIsHover] = useState(null);
  const [isSwapMenu, setIsSwapMenu] = useState(false);
  const [isLiquidityMenu, setIsLiquidityMenu] = useState(false);
  const swap = useRef(null);
  const liquidity = useRef(null);

  useOutsideClick(swap, () => {
    setIsSwapMenu(false);
  });
  useOutsideClick(liquidity, () => {
    setIsLiquidityMenu(null);
  });

  return (
    <nav>
      <ul
        className={className ? className : classes.menu_wrapper}
        style={{ paddingLeft: `${isFooter ? "0px" : "40px"}` }}
      >
        <li
          ref={swap}
          className={classes.menu_item}
          onClick={() => setIsSwapMenu(!isSwapMenu)}
          style={{ padding: `${isFooter ? "0 " : "9px 12px"}` }}
        >
          <span
            href="#"
            style={{
              color: `${isFooter && "#6dbbcc"}`,
            }}
            onMouseEnter={() => setIsHover("Swap")}
            onMouseLeave={() => setIsHover(null)}
          >
            SWAP
            <div
              className={classes.menu_angle}
              style={{
                transform: `${isSwapMenu ? "rotate(180deg)" : "none"}`,
                paddingTop: `${isSwapMenu && "4px"}`,
              }}
            >
              <AngleDown isHover={isHover} name="Swap" />
            </div>
          </span>
          <div
            className={classes.menu_dropdown}
            style={{
              opacity: `${isSwapMenu ? "1" : "0"}`,
              bottom: `${isFooter ? "25px" : ""}`,
              display: `${isSwapMenu ? "block" : "none"}`,
              textAlign: "center",
            }}
          >
            {menuAddressLinks.map((item, index) => {
              return (
                <span
                  key={item.pair}
                  onClick={() => createIframe(index, "swap")}
                >
                  {item.pair}
                </span>
              );
            })}
          </div>
        </li>
        <li
          ref={liquidity}
          className={classes.menu_item}
          style={{ padding: `${isFooter ? "0 0 2px 0" : "9px 12px"}` }}
        >
          <span
            href="#"
            style={{ color: `${isFooter && "#6dbbcc"}` }}
            name={"Add liquidity"}
            onMouseEnter={() => setIsHover("Add liquidity")}
            onMouseLeave={() => setIsHover(null)}
            onClick={() => setIsLiquidityMenu(!isLiquidityMenu)}
          >
            ADD LIQUIDITY
            <div
              className={classes.menu_angle}
              style={{
                transform: `${isLiquidityMenu ? "rotate(180deg)" : "none"}`,
                paddingTop: `${isLiquidityMenu && "4px"}`,
              }}
            >
              <AngleDown isHover={isHover} name="Add liquidity" />
            </div>
          </span>
          <div
            className={classes.menu_dropdown}
            style={{
              opacity: `${isLiquidityMenu ? "1" : "0"}`,
              bottom: `${isFooter ? "25px" : ""}`,
              display: `${isLiquidityMenu ? "block" : "none"}`,
            }}
          >
            {menuAddressLinks.map((item, index) => {
              return (
                <span
                  key={item.pair}
                  onClick={() => createIframe(index, "liquidity")}
                >
                  {item.pair}
                </span>
              );
            })}
          </div>
        </li>
        <li
          className={classes.menu_item}
          style={{ padding: `${isFooter ? "0 0 5px 0" : "9px 12px"}` }}
        >
          <a
            href="https://orbsdefi.substack.com/p/how-to-add-liquidity-on-uniswap"
            style={{
              color: `${isFooter && "#6dbbcc"}`,
              textTransform: `${isFooter && "none"}`,
            }}
          >
            HOW-TO
          </a>
        </li>
        <li
          className={classes.menu_item}
          style={{ padding: `${isFooter ? "0 0 5px 0" : "9px 12px"}` }}
        >
          <a
            href="https://paradigmfund.io/wp-content/uploads/2020/12/Combining-staking-and-liquidity-provisioning.pdf"
            style={{ color: `${isFooter && "#6dbbcc"}` }}
          >
            RESEARCH
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
