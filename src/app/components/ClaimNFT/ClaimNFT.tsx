'use client'

import { TransactionButton } from "thirdweb/react";
import { getContract } from "thirdweb";
import { arbitrumSepolia } from "thirdweb/chains";
import { claimTo } from "thirdweb/extensions/erc721";
import { useActiveAccount } from "thirdweb/react";
import { client } from "../../utils/thirdwebClient";
import toast from 'react-hot-toast';

const contractAddress = "0x9b04bECDD98e5f2FA0fBa2E902CC7f7c28776509";

export function ClaimNFT() {
  const account = useActiveAccount();

  const contract = getContract({
    client,
    address: contractAddress,
    chain: arbitrumSepolia,
  });

  return (
    <TransactionButton
      transaction={() => {
        if (!account) {
          throw new Error("Please connect your wallet first");
        }
        return claimTo({
          contract,
          to: account.address,
          quantity: BigInt(1),
        });
      }}
      onTransactionConfirmed={() => {
        toast.success('NFT claimed successfully!');
      }}
      onError={(error) => {
        toast.error(`Failed to claim NFT: ${error.message}`);
      }}
    >
      Claim NFT
    </TransactionButton>
  );
}