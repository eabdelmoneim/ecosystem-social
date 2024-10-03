'use client'

import { useAdminWallet } from "thirdweb/react";
import { linkProfile, getProfiles  } from "thirdweb/wallets";
import { useState, useEffect } from "react";
import { client, ecosystemWalletName, partnerId } from "../../utils/thirdwebClient";

export function LinkXProfile() {
  const wallet = useAdminWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [isXLinked, setIsXLinked] = useState(false);

  useEffect(() => {
    const checkXProfile = async () => {
      if (wallet) {
        const address = wallet?.getAccount()?.address;
        const profiles = await getProfiles({client, ecosystem: {id: `ecosystem.${ecosystemWalletName}`, partnerId: partnerId} });
        console.log("profiles:" + profiles.length + " address:" + address);
        setIsXLinked(profiles.some((profile: { type: string; })  => profile.type === "x"));
      }
    };

    checkXProfile();
  }, [wallet]);

  const handleLinkX = async () => {
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }

    if (isXLinked) {
      alert("X profile is already linked!");
      return;
    }

    setIsLoading(true);
    try {
      await linkProfile( {client: client,strategy: "x"});
      alert("X profile linked successfully!");
      setIsXLinked(true);
    } catch (error) {
      console.error("Error linking X profile:", error);
      alert("Failed to link X profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLinkX}
      disabled={isLoading || !wallet || isXLinked}
      className={`font-bold py-2 px-4 rounded ${
        wallet && !isXLinked
          ? "bg-blue-500 hover:bg-blue-700 text-white"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      {isLoading ? "Linking..." : isXLinked ? "X Profile Linked" : "Link X Profile"}
    </button>
  );
}