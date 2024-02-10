import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={18} color="#C6CBD9" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#C6CBD9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#212834",
    borderColor: "#212834",
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 1,
  },
  searchIcon: {
    marginHorizontal: 18,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 14,
    paddingVertical: 8,
  },
});

export default SearchInput;
