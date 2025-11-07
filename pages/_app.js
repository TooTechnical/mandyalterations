import "../styles/globals.css";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

const garamond = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "700"] });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${garamond.className} bg-paper bg-repeat min-h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
