export interface Links {
  dexScreenerLink: string;
  coinMarketCapLink: string;
  coinGeckoLink: string;
  etherscanLink: string;
  dexToolsLink: string;
  twitterLink: string;
  telegramLink: string;
  uniswapLink: string;
}
export interface Details {
  links: Links;
}

export const links = {
  links: {
    dexScreenerLink:
      "https://dexscreener.com/ethereum/0x41f50f520f5095fc8403df083285232b822611c3",
    coinMarketCapLink: "",
    coinGeckoLink: "",
    etherscanLink:
      "https://etherscan.io/address/0x3d806324b6df5af3c1a81acba14a8a62fe6d643f",
    dexToolsLink:
      "https://www.dextools.io/app/en/ether/pair-explorer/0x41f50f520f5095fc8403df083285232b822611c3",
    twitterLink: "https://twitter.com/tickerSOL",
    telegramLink: "https://t.me/SOLANAPORTALRFK",
    uniswapLink:
      "https://app.uniswap.org/#/swap?outputCurrency=0x3D806324b6Df5AF3c1a81aCbA14A8A62Fe6D643F",
    scatterLink: "https://www.scatter.art/bandicoot-manlets?tab=mint",
  },
};
