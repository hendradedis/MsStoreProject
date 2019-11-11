/** @format */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 14,
    color: "#2e2e2e",
  },
  selected: (background) => ({
    backgroundColor: background,
  }),
  selectedText: (text) => ({
    fontWeight: "bold",
    color: text,
  }),
});
