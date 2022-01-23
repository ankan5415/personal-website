import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/catamaran/300.css";
import "@fontsource/catamaran/400.css";
import "@fontsource/catamaran/500.css";
import "@fontsource/catamaran/600.css";
import "@fontsource/catamaran/700.css";
import "@fontsource/catamaran/800.css";
import "@fontsource/catamaran/900.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
