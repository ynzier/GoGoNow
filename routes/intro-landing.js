/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Container, Content, Button, View, Text } from 'native-base';
import DeviceInfo from 'react-native-device-info';
const Welcome = ({ navigation }) => {
  const Circle = () => {
    return (
      <View style={styles.circle}>
        <Text style={styles.gogoText}>GoGo Care</Text>
      </View>
    );
  };

  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;

  let isTablet = DeviceInfo.isTablet();

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FBFAFA',
    },
    shadow: {
      flex: 1,
      width: null,
      height: null,
    },
    gogoText: {
      color: 'white',
      alignSelf: 'center',
      fontSize: isTablet ? 60 : 30,
      paddingTop: isTablet ? 160 : 80,
    },
    circle: {
      width: isTablet ? 400 : 200,
      height: isTablet ? 400 : 200,
      borderRadius: (isTablet ? 400 : 200) / 2,
      backgroundColor: '#18a0fb',
      alignSelf: 'center',
      marginTop: isTablet ? 160 : 80,
    },
    bg: {
      flex: 1,
      marginTop: 40,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 30,
      bottom: 30,
    },
    text: {
      alignSelf: 'center',
      fontSize: 19,
      color: '#A6A6A6',
    },
    textGroup: {
      marginTop: 10,
    },
    Headtext: {
      alignSelf: 'center',
      fontSize: 42,
      fontWeight: 'bold',
      color: '#18A0FB',
      paddingBottom: 10,
    },
    btn: {
      backgroundColor: '#18A0FB',
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
    },
    btnOutline: {
      backgroundColor: '#FFF',
      borderColor: '#18A0FB',
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
    },
    btnGroup: {
      marginTop: 30,
    },
  });

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View style={styles.container}>
        <Content>
          <Circle />

          <View style={styles.bg}>
            <Text style={styles.Headtext}>Hello!</Text>
            <View style={styles.textGroup}>
              <Text style={styles.text}>Welcome to GoGo Care</Text>
              <Text style={styles.text}>
                Out of home care service to live as you want
              </Text>
            </View>
            <View style={styles.btnGroup}>
              <Button
                rounded
                style={styles.btn}
                onPress={() =>
                  navigation.navigate('Signup', {
                    redirectTo: 'user',
                  })
                }>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  สมัครใช้บริการ
                </Text>
              </Button>
              <Button
                rounded
                bordered
                style={styles.btnOutline}
                onPress={() => navigation.navigate('Signup', {
                    redirectTo: 'caregiver',
                  })}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#18A0FB',
                  }}>
                  สมัครเป็นผู้ดูแลกับเรา
                </Text>
              </Button>
            </View>
          </View>
        </Content>
      </View>
    </Container>
  );
};
export default Welcome;
