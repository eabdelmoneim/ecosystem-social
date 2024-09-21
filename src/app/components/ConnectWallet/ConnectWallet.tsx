'use client'

import { ConnectButton } from "thirdweb/react";
import { ecosystemWallet, createWallet } from "thirdweb/wallets";
import { arbitrumSepolia } from "thirdweb/chains";
import { client } from "../../utils/thirdwebClient";

const wallets = [
  ecosystemWallet("ecosystem.treasure-chest-ecosystem", {
    partnerId: "1415d24e-c7b0-4fce-846e-740841ef2c32"
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
];

export function ConnectWallet() {
  return (
    <ConnectButton 
      client={client} 
      wallets={wallets} 
      accountAbstraction={{
        chain: arbitrumSepolia,
        gasless: true,
      }}
    />
  );
}