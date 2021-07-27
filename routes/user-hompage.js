import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Container, View, Button, Text } from 'native-base';
import ReviewCard from '../components/home-review-card';
import CalendarCard from '../components/home-calendar-card';
import UserFooter from '../components/user-footer';
import TopBar from '../components/top-bar';
import CouponImg from '../components/img/coupon_newuser.png';

import pic1 from '../components/img/gohealth1.png';

import pic2 from '../components/img/gohealth2.png';
const Home = ({ navigation }) => {
  const styles = StyleSheet.create({
    inputAlignment: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      marginTop: 15,
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },
    getBtn1: {
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
      zIndex: 2,
      position: 'absolute',
      marginTop: 140,
    },
    getBtn2: {
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
      zIndex: 1,
      position: 'absolute',
      marginTop: 350,
    },
    TextFont: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 10,
    },
  });

  return (
    <Container>
      <View style={styles.container}>
        <TopBar page="BOOKING NOW!" />
        <View style={{ width: '100%', height: 200, aspectRatio: 1 * 2.1 }}>
          <Image
            source={CouponImg}
            style={{ width: '100%', height: 200 }}
            resizeMode={'center'}
          />
        </View>
        <ScrollView
          style={{
            width: '100%',
            height: 400,
            flex: 1,
            marginTop: 0,
          }}>
          <Image
            source={pic1}
            style={{
              width: '80%',
              height: 200,
              alignSelf: 'center',
              borderRadius: 5,
            }}
            resizeMode={'stretch'}
          />
          <View
            style={{
              zIndex: 1,
              position: 'absolute',
              width: '100%',
              paddingTop: 80,
            }}>
            <Text style={styles.TextFont}>Go Health</Text>
            <Text style={styles.TextFont}>บริการพาไปพบแพทย์</Text>
          </View>
          <Button
            style={styles.getBtn1}
            onPress={() => navigation.navigate('user-booking')}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                paddingLeft: 48,
              }}>
              จองเลย!
            </Text>
          </Button>
          <Image
            source={pic2}
            style={{
              width: '80%',
              height: 200,
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 10,
            }}
            resizeMode={'stretch'}
          />
          <View
            style={{
              zIndex: 1,
              position: 'absolute',
              width: '100%',
              paddingTop: 290,
            }}>
            <Text style={styles.TextFont}>Go Active</Text>
            <Text style={styles.TextFont}>บริการพาไปทำกิจกรรม</Text>
          </View>
          <Button
            style={styles.getBtn2}
            onPress={() => navigation.navigate('user-booking')}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                paddingLeft: 48,
              }}>
              จองเลย!
            </Text>
          </Button>
        </ScrollView>
        <UserFooter home />
      </View>
    </Container>
  );
};
export default Home;
