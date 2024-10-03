import { createThirdwebClient } from "thirdweb";

export const ecosystemWalletName = process.env.NEXT_PUBLIC_ECOSYSTEM_WALLET_NAME || "";
export const partnerId = process.env.NEXT_PUBLIC_PARTNER_ID || "";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});