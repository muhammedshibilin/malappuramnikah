import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Malappuram Nikah",
  description: "Sign in to your Malappuram Nikah account to find your perfect match.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
