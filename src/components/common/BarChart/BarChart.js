import React, { useContext, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import Loader from "../Loader/Loader";
import OrbsContext from "../../../contex/orbsData/orbsContext";
import { formatNumber } from "../../../utils";
import classes from "./BarChart.module.scss";

export default () => {
  const orbsContext = useContext(OrbsContext);
  const { chartData, switchPosition, isLoading } = orbsContext;



  const renderToolTip = (props) => {
    const { payload } = props;
    let info =
      switchPosition === "Liquidity"
        ? formatNumber(payload?.[0]?.payload?.liquidity)
        : formatNumber(payload?.[0]?.payload?.volume);
    return (
      <div className={classes.custom_tooltip}>
        <p className={classes.custom_tooltip__line}>
          {`${payload?.[0]?.payload?.day ?? ""}  ${
            payload?.[0]?.payload?.month ?? ""
          } ${payload?.[0]?.payload?.year ?? ""}`}
        </p>

        <p
          className={classes.custom_tooltip__line}
        >{`${switchPosition}:  ${info}`}</p>
      </div>
    );
  };



  return (
    <ResponsiveContainer width={"85%"} height={150}>
      {isLoading ? (
        <Loader />
      ) : (
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 35,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid
            stroke="rgba(254, 255, 254, 0.2)"
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickMargin={12}
            axisLine={false}
            style={{ fontSize: "12px" }}
            tickLine={false}
          >
            <Label
              value={`${
                chartData.length > 0 && chartData[chartData.length - 1].month
              }`}
              style={{ fill: "rgba(255, 255, 255, .5)", fontSize: "12px" }}
              offset={5}
              position="right"
            />
          </XAxis>
          <Tooltip
            content={renderToolTip}
            cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
          />

          <Bar
            dataKey={switchPosition === "Liquidity" ? "liquidity" : "volume"}
            fill="rgba(109, 187, 204, 0.3)"
            barSize={16}
          />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};
