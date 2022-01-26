import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "Catamaran",
    body: "Catamaran",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.100", "#1f1f1f")(props),
      },
    }),
  },
});

export default theme;
