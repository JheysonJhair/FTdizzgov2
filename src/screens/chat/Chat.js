import React, { useState, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  Send,
  Composer,
  InputToolbar,
} from "react-native-gifted-chat";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import StatusModal from "../../components/modals/StatusModal ";

import { getMensajes } from "../../api/apiChat";
import { sendMessage } from "../../api/apiChat";
import { useUser } from "../../components/utils/UserContext";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const { userData } = useUser();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalStatus, setModalStatus] = useState("error");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

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

    const intervalId = setInterval(fetchMensajes, 500);
    return () => clearInterval(intervalId);
  }, []);

  const onSend = async (newMessages = []) => {
    try {
      if (newMessages == "") {
        setModalStatus("error");
        setModalVisible(true);
        setText("Mensaje vacío");
        setText2("Tu mensaje no contiene nada!");
        return;
      } else {
        const userId = userData.IdUser;
        await sendMessage(userId, newMessages);

        setInputText("");
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error.message);
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
  useEffect(() => {
    if (modalVisible) {
      const timeout = setTimeout(() => {
        setModalVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [modalVisible]);
  return (
    <>
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={(newMessages) => onSend(newMessages)}
        messagesContainerStyle={{
          backgroundColor: "#161B21",
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
        renderBubble={(props) => (
          <View>
            {props.currentMessage.user._id !== userData.IdUser && (
              <Text
                style={{ color: "#40A5E7", fontWeight: "bold", fontSize: 11 }}
              >
                {props.currentMessage.user.name}
              </Text>
            )}
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
          </View>
        )}
        renderSend={renderSendButton}
        renderComposer={(props) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Composer {...props} text={inputText} />
            {renderSendButton(props)}
          </View>
        )}
        renderInputToolbar={CustomInputToolbar}
        onInputTextChanged={(text) => setInputText(text)}
        text={inputText}
      />
      <StatusModal
        visible={modalVisible}
        status={modalStatus}
        text={text}
        text2={text2}
      />
    </>
  );
};

export default Chat;
