'use client'

import { useActiveWallet,useProfiles } from "thirdweb/react";
import { linkProfile } from "thirdweb/wallets";
import { useState, useEffect } from "react";
import { client, ecosystemWalletName, partnerId } from "../../utils/thirdwebClient";

export function LinkXProfile() {
  const wallet = useActiveWallet();
  const { data: profiles } = useProfiles({
    client,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isXLinked, setIsXLinked] = useState(false);

  useEffect(() => {
    const checkXProfile = async () => {
      if (profiles) {
        setIsXLinked(profiles.some((profile: { type: string; }) => profile.type === "x"));
      }
    };

    checkXProfile();
  }, [profiles]);

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
      await linkProfile( {client: client, ecosystem: {id: `ecosystem.${ecosystemWalletName}`, partnerId: partnerId}, strategy: "x"});
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