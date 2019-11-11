/** @format */

import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { Languages, withTheme } from "@common";
import { Chips } from "@components";
import styles from "./style";

class Recents extends React.PureComponent {
  render() {
    const {
      histories,
      onClear,
      onSearch,
      searchText,
      theme: {
        dark: isDark,
        colors: { text },
      },
    } = this.props;

    if (histories.length == 0) {
      return <View />;
    }

    return (
      <View>
        <View style={styles.container}>
          <Text style={[styles.text, { color: text }]}>
            {Languages.Recents}
          </Text>

          <TouchableOpacity onPress={onClear}>
            <Image
              source={require("@images/ic_trash.png")}
              style={[styles.icon, isDark && { tintColor: "#fff" }]}
            />
          </TouchableOpacity>
        </View>
        <Chips items={histories} selectedItem={searchText} onPress={onSearch} />
      </View>
    );
  }
}

export default withTheme(Recents);
