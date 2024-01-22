import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ iconName, selectedIcon }) => {
  const navigation = useNavigation();

  const isSelected = iconName === selectedIcon;
  const iconColor = isSelected ? "#3498db" : "#fff";

  const handlePress = () => {
    switch (iconName) {
      case "home":
        navigation.navigate("Home");
        break;
      case "user":
        navigation.navigate("Perfil");
        break;
      case "comments":
        navigation.navigate("Chat");
        break;
      case "star":
        navigation.navigate("Estrellas");
        break;
      case "shopping-cart":
        navigation.navigate("Compra");
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          ...styles.absoluteIcon,
          backgroundColor: isSelected ? "#161B21" : "#141B20",
        }}
        onPress={handlePress}
      >
        <Icon name={iconName} size={25} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  absoluteIcon: {
    marginHorizontal: 25,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
};

export default Footer;
