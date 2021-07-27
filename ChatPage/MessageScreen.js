import React from 'react';
import {View, Text, StyleSheet, FlatList, AsyncStorage} from 'react-native';
import {
  Header,
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Item,
  Left,
  Title,
  Body,
  Right,
  Badge,
} from 'native-base';
import {
  ContainerList,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../ChatPage/MessageStyle';
// import {Badge} from 'react-native-elements';

import UserFooter from '../components/user-footer';
const Messages = [
  {
    id: '1',
    userName: 'สุจิตรา ศรีสุวานนท์',
    userImg: require('../assets/images/jonas-kakaroto-wNaVqDIDG8k-unsplash.jpg'),
    messageTime: '2m ago',
    messageText: 'มาได้เลยค่ะพร้อมแล้ว',
    notifcount: 1,
  },
  {
    id: '2',
    userName: 'ชัยเกษม สำราญวงศ์',
    userImg: require('../assets/images/pietro-schellino-MeQ6cKkozpY-unsplash.jpg'),
    messageTime: '2m ago',
    messageText:
      'คุณพ่อต้องระวังในเรื่องของการควบคุมการทานน้ำระหว่างวันนะคะ ช่วยดูแลให้...',
  },
];

const MessagesScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    HeaderStyle: {
      backgroundColor: '#fff',
      borderBottomColor: 'rgba(232, 232, 232, 1)',
      borderBottomWidth: 1,
      height: 80,
    },
    HeaderBar: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',

      //   flex: 1,
    },
    IconBar: {
      color: '#C3C3C3',
    },
    BadgeStyle: {
      position: 'absolute',
      top: -4,
      right: -4,
      alignSelf: 'center',
      flex: 1,
    },
  });
  return (
    <Container>
      <Header style={styles.HeaderStyle}>
        <Left
          style={{
            flex: 1,
          }}>
          <View style={styles.HeaderBar}>
            <Title style={{color: '#000'}}>My Chat</Title>
          </View>
        </Left>
        <Body style={{flex: 1}}></Body>
        <Right style={{flex: 1}}></Right>
      </Header>
      <ContainerList>
        <FlatList
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              onPress={() =>
                navigation.navigate(
                  'ChatScreen',
                  {userName: item.userName},
                  {userImg: item.userImg},
                )
              }>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                    {/* <Badge value="2" status="error" style={styles.BadgeStyle} /> */}
                    <Badge style={{width: 26, backgroundColor: 'red'}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 13,
                          lineHeight: 18,
                          marginLeft: 3,
                          fontWeight: 'bold',
                        }}>
                        2
                      </Text>
                    </Badge>
                  </UserInfoText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </ContainerList>

        <UserFooter chat />
    </Container>
    // <Container>

    //   <View style={styles.container}>
    //     <FlatList
    //       data={Messages}
    //       keyExtractor={Item.id}
    //       renderItem={({item}) => (
    //         <View>
    //           <Text>{item.userName}</Text>
    //         </View>
    //       )}
    //     />
    //   </View>

    // </Container>
  );
};

export default MessagesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });
