import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function ItemLoja() {
  return (
    <View style={styles.container}>
      <Pressable>
        <AntDesign name="checkcircleo" color={"black"} size={24} />
      </Pressable>
      <Text style={styles.title}>Mouse Gamer</Text>
      <Pressable>
        <MaterialIcons name="delete" size={24} color={"black"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    
  },
  title: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
  },
});
