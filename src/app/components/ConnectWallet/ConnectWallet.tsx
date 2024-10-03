'use client'

import { ConnectButton } from "thirdweb/react";
import { ecosystemWallet, createWallet } from "thirdweb/wallets";
import { arbitrumSepolia } from "thirdweb/chains";
import { client, ecosystemWalletName, partnerId } from "../../utils/thirdwebClient";

const ecosystemWalletInstance = ecosystemWallet(`ecosystem.${ecosystemWalletName}`, {
  partnerId: partnerId
});

const wallets = [
  ecosystemWalletInstance,
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
];

export function ConnectWallet() {
  return (
    <ConnectButton 
      client={client} 
      wallets={wallets} 
      recommendedWallets={[ecosystemWalletInstance]}
      accountAbstraction={{
        chain: arbitrumSepolia,
        gasless: true,
      }}
    />
  );
}