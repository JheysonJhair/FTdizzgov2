import React, { useState, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  Composer,
  InputToolbar,
} from "react-native-gifted-chat";

import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

import { getMensajes, sendMessage, sendImage } from "../../api/apiChat";
import { useUser } from "../../components/utils/UserContext";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const { userData } = useUser();

  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const mensajes = await getMensajes();
        setMessages(mensajes.reverse());
      } catch (error) {
        console.error("Error al obtener los mensajes:", error.message);
      }
    };
    fetchMensajes();

    const intervalId = setInterval(fetchMensajes, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const onSend = async (newMessages = []) => {
    try {
      const userId = userData.IdUser;
      await sendMessage(userId, newMessages);

      setInputText("");
    } catch (error) {
      console.error("Error al enviar mensaje:", error.message);
    }
  };

  const handleChooseImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const formData = new FormData();
      formData.append("IdUser", userData.IdUser);
      formData.append("file", {
        uri: result.uri,
        type: "image/jpeg",
        name: "file",
      });
      const { success, error } = await sendImage(formData);
    }
  };

  const renderSendButton = (props) => {
    const { text } = props;

    if (text && text.trim().length > 0) {
      return (
        <TouchableOpacity onPress={() => onSend(props.text)}>
          <Icon
            name="arrow-circle-right"
            size={36}
            color="#66bef4"
            style={{ marginLeft: 10, marginRight: 10, color: "#66bef4" }}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const CustomInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{ backgroundColor: "#161B21" }}
      />
    );
  };

  const renderBubble = (props) => {
    return (
      <View>
        {props.currentMessage.user._id !== userData.IdUser && (
          <Text style={{ color: "#40A5E7", fontWeight: "bold", fontSize: 11 }}>
            {props.currentMessage.user.name}
          </Text>
        )}
        {props.currentMessage.text ? (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: "#212834",
                borderRadius: 10,
              },
              right: {
                backgroundColor: "#40A5E7",
                borderRadius: 10,
              },
            }}
            textStyle={{
              left: {
                color: "#fff",
              },
              right: {
                color: "#fff",
              },
            }}
          />
        ) : (
          <View>
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: "#212834",
                  borderRadius: 5,
                },
                right: {
                  backgroundColor: "#40A5E7",
                  borderRadius: 5,
                },
              }}
            >
            </Bubble>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/fondochat.png")}
        style={styles.backgroundImage}
      />
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={(newMessages) => onSend(newMessages)}
        messagesContainerStyle={{
          backgroundColor: "transparent",
        }}
        textInputStyle={{
          backgroundColor: "#212834",
          borderRadius: 10,
          paddingLeft: 10,
          marginTop: 2,
          color: "#fff",
        }}
        placeholder="Mensaje"
        user={{
          _id: userData.IdUser,
          name: userData.FirstName,
        }}
        renderBubble={renderBubble}
        renderSend={renderSendButton}
        renderComposer={(props) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Composer {...props} text={inputText} />
            <TouchableOpacity onPress={handleChooseImage}>
              <Icon
                name="image"
                size={28}
                color="#40A5E7"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            {renderSendButton(props)}
          </View>
        )}
        renderInputToolbar={CustomInputToolbar}
        onInputTextChanged={(text) => setInputText(text)}
        text={inputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative", 
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default Chat;
