import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView, // Importa ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const UserInfoScreen = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };
  const navigateToChat = () => {
    navigation.navigate("ChatPrivate", { user: user });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={24}
            color="#fff"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{user.name}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.phoneName}>+51 987 876 876</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={navigateToChat}>
              <Icon name="chatbox" size={24} color="#40A5E7" />
              <Text style={styles.buttonText}>Mensaje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="call" size={24} color="#40A5E7" />
              <Text style={styles.buttonText}>Llamar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="videocam" size={24} color="#40A5E7" />
              <Text style={styles.buttonText}>Video</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>

          <View style={styles.descriptionContainer}>
            <Text style={[styles.description, { textAlign: "left" }]}>
              Just Me
            </Text>
            <Text style={[styles.fecha, { textAlign: "left" }]}>
              2 de enero del 2024
            </Text>
          </View>

          <View style={styles.line2}></View>

          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Icon name="notifications" size={24} color="#A3AABF" />
              <Text style={styles.optionText2}>Silenciar Notificaciones</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#75c0ef" }}
                thumbColor={notificationsEnabled ? "#40A5E7" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotifications}
                value={notificationsEnabled}
              />
            </View>
            <View style={styles.option}>
              <Icon name="settings" size={24} color="#A3AABF" />
              <Text style={styles.optionText}>Personalizar Notificaciones</Text>
            </View>
            <View style={styles.option}>
              <Icon name="close-circle" size={24} color="#A3AABF" />
              <Text style={styles.optionText}>Bloquear contacto</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141B20",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ccc",
  },
  phoneName: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#A3AABF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#334956",
  },
  buttonText: {
    marginTop: 5,
    color: "#ccc",
  },
  line: {
    width: "120%",
    height: 20,
    backgroundColor: "#0e1114",
    marginVertical: 20,
  },
  line2: {
    width: "120%",
    height: 20,
    backgroundColor: "#0e1114",
    marginVertical: 10,
  },
  descriptionContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  description: {
    color: "#A3AABF",
    fontSize: 16,
  },
  fecha: {
    color: "#364754",
    marginTop: 6,
    fontSize: 13,
    fontWeight: "bold",
  },
  optionsContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#A3AABF",
  },
  optionText2: {
    marginRight: 70,
    fontSize: 16,
    color: "#A3AABF",
  },
});

export default UserInfoScreen;
