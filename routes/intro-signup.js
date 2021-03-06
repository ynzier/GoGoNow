/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  View,
} from 'native-base';

const Signup = ({ route, navigation }) => {
  const deviceWidth = Dimensions.get('window').width;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = StyleSheet.create({
    inputAlignment: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      marginTop: 15,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#F6F6F6',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 16,
      marginBottom: 16,
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FBFAFA',
    },
    btnLogIn: {
      backgroundColor: '#18A0FB',
      flexDirection: 'row',
      borderColor: '#18A0FB',
      paddingTop: 13,
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
      borderRadius: 50,
      height: 51,
      alignSelf: 'center',
    },
    btnFacebookConnect: {
      backgroundColor: '#3677EA',
      flexDirection: 'row',
      borderColor: '#3677EA',
      paddingTop: 13,
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
      borderRadius: 50,
      height: 51,
      alignSelf: 'center',
    },
    btnGroup: {
      marginTop: 30,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 0,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
  });

  const { redirectTo } = route.params;

  return (
    <Container>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <Header noShadow style={{ backgroundColor: 'white' }}>
          <Left style={{ flex: 1 }}>
            <Icon
              name="close"
              style={{ color: '#BDBDBD' }}
              onPress={() => navigation.navigate('Welcome')}
            />
          </Left>
          <Body style={{ flex: 1 }}>
            <Title style={{ alignSelf: 'center', color: 'black' }}>
              Sign Up
            </Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button
              transparent
              onPress={() =>
                navigation.navigate('LogIn', {
                  redirectTo: redirectTo,
                })
              }>
              <Text style={{ color: '#18A0FB' }}>Login</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.inputAlignment}>
          <TextInput
            label="Name"
            placeholder="Name"
            onChangeText={text => setName(text)}
            style={styles.input}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            style={styles.input}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#18A0FB',
              paddingBottom: 10,
            }}>
            Forgot your password?
          </Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btnLogIn}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('LogIn', {
                redirectTo: redirectTo,
              })
            }>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', color: 'grey', marginTop: 5 }}>
            -------- or --------
          </Text>
          <TouchableOpacity
            style={styles.btnFacebookConnect}
            activeOpacity={0.5}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              Connect with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
export default Signup;
