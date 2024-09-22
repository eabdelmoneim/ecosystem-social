'use client'

import { ConnectButton } from "thirdweb/react";
import { ecosystemWallet, createWallet } from "thirdweb/wallets";
import { arbitrumSepolia } from "thirdweb/chains";
import { client } from "../../utils/thirdwebClient";

const ecosystemWalletName = process.env.NEXT_PUBLIC_ECOSYSTEM_WALLET_NAME || "";
const partnerId = process.env.NEXT_PUBLIC_PARTNER_ID || "";

const wallets = [
  ecosystemWallet(`ecosystem.${ecosystemWalletName}`, {
    partnerId: partnerId
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