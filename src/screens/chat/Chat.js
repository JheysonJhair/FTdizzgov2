import React, {
    useState,
    useLayoutEffect,
    useCallback
  } from 'react';
  // import { TouchableOpacity, Text } from 'react-native';
  // import { GiftedChat } from 'react-native-gifted-chat';
  // import { useRoute } from '@react-navigation/native';
  // import {
  //   collection,
  //   addDoc,
  //   orderBy,
  //   query,
  //   onSnapshot
  // } from 'firebase/firestore';
  // import { signOut } from 'firebase/auth';
  // import { auth, database } from '../../../config/firebase';
  // import { useNavigation } from '@react-navigation/native';
  // import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native-animatable';

  
  
  export default function Chat() {
  
  //   const [messages, setMessages] = useState([]);
  //   const navigation = useNavigation();
  
  //   const route = useRoute();
  //   const userProfileImage = route.params?.userProfileImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsrVkBPXQR8W4sUq72MysJL_sBtjQy_BnRQ'; 
  
  
  // const onSignOut = () => {
  //     signOut(auth).catch(error => console.log('Error logging out: ', error));
  //   };
  
  //   useLayoutEffect(() => {
  //       navigation.setOptions({
  //         headerRight: () => (
  //           <TouchableOpacity
  //             style={{
  //               marginRight: 10
  //             }}
  //             onPress={onSignOut}
  //           >
  //             <AntDesign name="logout" size={24} color={blue} style={{marginRight: 10}}/>
  //           </TouchableOpacity>
  //         )
  //       });
  //     }, [navigation]);
  
  //   useLayoutEffect(() => {
  
  //       const collectionRef = collection(database, 'chats');
  //       const q = query(collectionRef, orderBy('createdAt', 'desc'));
  
  //   const unsubscribe = onSnapshot(q, querySnapshot => {
  //       console.log('querySnapshot unsusbscribe');
  //         setMessages(
  //           querySnapshot.docs.map(doc => ({
  //             _id: doc.data()._id,
  //             createdAt: doc.data().createdAt.toDate(),
  //             text: doc.data().text,
  //             user: doc.data().user
  //           }))
  //         );
  //       });
  //   return unsubscribe;
  //     }, []);
  
  //   const onSend = useCallback((messages = []) => {
  //       setMessages(previousMessages =>
  //         GiftedChat.append(previousMessages, messages)
  //       );
  //       const { _id, createdAt, text, user } = messages[0];    
  //       addDoc(collection(database, 'chats'), {
  //         _id,
  //         createdAt,
  //         text,
  //         user,
  //       });
  //     }, []);
  
      return (
        <View>
          
        </View>
      );
  }
  
  