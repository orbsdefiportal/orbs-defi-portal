import React, { useState } from "react";
import classes from "./Menu.module.scss";

import { AngleDown } from "../../../assets/components";

export default ({ className = "", isFooter = false }) => {
  const [isHover, setIsHover] = useState(null);
  const [isShowMenu, setIsShowMenu] = useState(null);

  return (
    <nav>
      <ul
        className={className ? className : classes.menu_wrapper}
        style={{ paddingLeft: `${isFooter ? "0px" : "40px"}` }}
      >
        <li
          className={classes.menu_item}
          onClick={() => setIsShowMenu("Swap")}
          // className={classes.menu_item + " " + classes.menu_dropdownItem}
          style={{ padding: `${isFooter ? "0 " : "9px 12px"}` }}
        >
          <a
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
                transform: `${
                  isShowMenu === "Swap" ? "rotate(180deg)" : "none"
                }`,
                paddingTop: `${isShowMenu === "Swap" && "4px"}`,
              }}
            >
              <AngleDown isHover={isHover} name="Swap" />
            </div>
          </a>
          <div
            className={classes.menu_dropdown}
            style={{
              opacity: `${isShowMenu === "Swap" ? "1" : "0"}`,
              bottom: `${isFooter ? "25px" : ""}`,
              display: `${isShowMenu === "Swap" ? "block" : "none"}`,
            }}
          >
            <a href="#">Label</a>
            <a href="#">Label</a>
            <a href="#">Label</a>
          </div>
        </li>
        <li
          className={classes.menu_item}
          onClick={() => setIsShowMenu("Add liquidity")}
          style={{ padding: `${isFooter ? "0 0 2px 0" : "9px 12px"}` }}
        >
          <a
            href="#"
            style={{ color: `${isFooter && "#6dbbcc"}` }}
            name={"Add liquidity"}
            onMouseEnter={() => setIsHover("Add liquidity")}
            onMouseLeave={() => setIsHover(null)}
          >
            ADD LIQUIDITY
            <div
              className={classes.menu_angle}
              style={{
                transform: `${
                  isShowMenu === "Add liquidity" ? "rotate(180deg)" : "none"
                }`,
                paddingTop: `${isShowMenu === "Add liquidity" && "4px"}`,
              }}
            >
              <AngleDown isHover={isHover} name="Add liquidity" />
            </div>
          </a>
          <div
            className={classes.menu_dropdown}
            style={{ opacity: `${isShowMenu === "Add liquidity" ? "1" : "0"}`, bottom: `${isFooter ? "25px" : ""}`, display: `${isShowMenu === "Add liquidity" ? "block" : "none"}`, }}
          >
            <a href="#">Label</a>
            <a href="#">Label</a>
            <a href="#">Label</a>
          </div>
        </li>
        <li
          className={classes.menu_item}
          style={{ padding: `${isFooter ? "0 0 5px 0" : "9px 12px"}` }}
        >
          <a
            href="#"
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
          <a href="#" style={{ color: `${isFooter && "#6dbbcc"}` }}>
            RESEARCH
          </a>
        </li>
      </ul>
    </nav>
  );
};
