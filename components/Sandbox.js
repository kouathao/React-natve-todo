import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return <View styles={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#333",
  },
});
