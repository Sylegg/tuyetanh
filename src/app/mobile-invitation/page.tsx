import type { Metadata } from "next";
import WeddingInvitation from "@/components/WeddingInvitation";
import { MobileKeyboardSupport } from "@/components/MobileKeyboardSupport";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MobileInvitationPage() {
  return (
    <>
      <MobileKeyboardSupport />
      <WeddingInvitation />
    </>
  );
}
