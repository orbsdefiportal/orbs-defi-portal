import gql from "graphql-tag";

export const GET_POOL_INFO_BALANCER = gql`
  query GetPoolInfo($id: String, $timestamp_gt: Int, $timestamp_lt: Int) {
    pools(where: { id: $id }) {
      id
      swapFee
      controller
      liquidity
      swapFee
      swaps {
        poolTotalSwapVolume
      }
      swapsCount
      tokens {
        address
        balance
        decimals
        symbol
        denormWeight
      }

      totalSwapFee
      totalSwapVolume
      totalWeight
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
        id
        decimals
        derivedETH
        tradeVolume
        symbol
        tradeVolumeUSD
        totalSupply
        totalLiquidity
      }
      token1 {
        id
        decimals
        derivedETH
        tradeVolume
        symbol
        tradeVolumeUSD
        totalSupply
        totalLiquidity
      }
      reserve0
      reserve1
      totalSupply
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      reserveETH
      volumeUSD
      liquidityProviderCount
    }
    swaps(where: { pair: $id }, orderBy: timestamp, orderDirection: desc) {
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
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

//ETH/ORBS
export const GET_UNISWAP_DAY_DATA = gql`
  query GetDailyInfo($id: String) {
    pairDayData(id: "0xc98b3b8c7cc0d7d925d1a407347b845d9f001391-18511") {
      date
      dailyVolumeToken0
      dailyVolumeToken1
      reserveUSD
      token0 {
        id
        name
      }
      token1 {
        id
        name
      }
    }
  }
`;

export const GET_TOKEN_INFO = gql`
  {
    tokens(first: 5) {
      id
      symbol
      name
      decimals
    }
  }
`;

export const GET_POOL_INFO = gql`
  {
    pools(first: 5) {
      id
      controller
      publicSwap
      finalized
    }
  }
`;

