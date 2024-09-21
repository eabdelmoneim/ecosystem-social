import { ConnectWallet } from "./components/ConnectWallet/ConnectWallet";
import { ClaimNFT } from "./components/ClaimNFT/ClaimNFT";
import { LinkXProfile } from "./components/LinkXProfile/LinkXProfile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold mb-4">NFT Gasless Claim App</h1>
        <div className="flex gap-4 items-center">
          <ConnectWallet />
          <ClaimNFT />
          <LinkXProfile />
        </div>
      </main>
    </div>
  );
}
