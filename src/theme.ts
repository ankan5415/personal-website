import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "Catamaran, sans-serif",
    body: "Catamaran, sans-serif",
  },
  styles: {
    // @ts-expect-error
    global: (props) => ({
      body: {
        bg: mode("gray.100", "#1f1f1f")(props),
        color: mode("gray.700", "gray.300")(props),
      },
    }),
  },
});

export default theme;
