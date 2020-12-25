import gql from "graphql-tag";

export const GET_POOL_INFO_BALANCER = gql`
  query GetPoolInfo($id: String, $timestamp_gt: Int, $timestamp_lt: Int) {
    pools(where: { id: $id }) {
      swapFee
      liquidity
      swapFee
      swaps {
        poolTotalSwapVolume
      }
      swapsCount
      tokens {
        denormWeight
      }

      totalSwapFee
      totalSwapVolume
    }

    swaps(where: { timestamp_gt: $timestamp_gt, timestamp_lt: $timestamp_lt }) {
      poolLiquidity
      poolTotalSwapVolume
      timestamp
    }
    tokenPrice(id: "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa") {
      price
    }
  }
`;

export const GET_POOL_INFO_UNISWAP = gql`
  query GetPoolInfo($id: String, $timestamp_lt: Int, $monthAgo: Int) {
    pair(id: $id) {
      token0 {
        derivedETH
        tradeVolume
        tradeVolumeUSD
        totalLiquidity
      }
      token1 {
        derivedETH
        tradeVolume
        tradeVolumeUSD
        totalLiquidity
      }
      reserve0
      reserve1
      token0Price
      token1Price
      reserveETH
      volumeUSD
    }
    swaps(where: { pair: $id }, orderBy: timestamp, orderDirection: desc) {
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      amountUSD
    }

    pairDayDatas(
      first: 100
      where: {
        pairAddress: "0xc98b3b8c7cc0d7d925d1a407347b845d9f001391"
        date_gt: $monthAgo
        date_lt: $timestamp_lt
      }
    ) {
      reserveUSD
      dailyVolumeUSD
      date
      pairAddress
    }
  }
`;

export const GET_UNISWAP_TOKEN_PRICE = gql`
  query GetUniswapPrice($id: String) {
    pair(id: "0xc98b3b8c7cc0d7d925d1a407347b845d9f001391") {
      token0Price
    }
  }
`;
