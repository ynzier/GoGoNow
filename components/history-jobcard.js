/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {  StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Icon,
  Body,
  View,
  Right,
} from 'native-base';
import profile from '../assets/images/profile.png';
import { useState } from 'react';
import { HistoryWave } from './svg/wave';
import { useNavigation } from '@react-navigation/native';

const UserSideJobCard = params => {
  const navigation = useNavigation();
  const [Patient, setPatient] = useState({
    name: 'สุจิตรา',
    lastname: 'ศรีสุวานนท์',
    sex: 'หญิง',
    age: 79,
    location: 'โรงพยาบาลศิริราช',
    time: '6:00',
    day: 'พ.',
    daynum: 12,
    month: 'พ.ค.',
  });

  const styles = StyleSheet.create({
    CardStyle: {
      width: 370,
      height: 265,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderColor: '#FFF',
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
    },
    WaveStyle: { position: 'absolute', top: 0, left: 0, zIndex: 0 },
    CardHeader: {
      marginLeft: 0,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
      zIndex: 1,
      top: 0,
      left: 0,
      position: 'absolute',
      backgroundColor: 'transparent',
    },
    SexAgeStyle: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
    callnowBtn: {
      backgroundColor: '#FFFFFF',
      borderColor: '#18A0FB',
      borderWidth: 1,
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
      marginRight: 10,
    },
    chatnowBtn: {
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
    },
  });
  return (
    <Container>
      <View style={{ flexGrow: 1 }}>
        <Content>
          <Card style={styles.CardStyle}>
            <HistoryWave style={styles.WaveStyle} />
            <CardItem style={styles.CardHeader}>
              <Left>
                <Body>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    สวัสดีค่ะ
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {Patient.name} {Patient.lastname}
                  </Text>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    เพศ{' '}
                    <Text style={styles.SexAgeStyle}>
                      {Patient.sex} {Patient.age}
                    </Text>{' '}
                    ปี
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginTop: 20,
                    }}>
                    ผู้ดูแลส่วนตัวของคุณ
                  </Text>
                </Body>
              </Left>
              <Right style={{ marginRight: 20, marginTop: 20 }}>
                <Thumbnail scaleX={1.7} scaleY={1.7} source={profile} />
                <View
                  style={{
                    backgroundColor: '#06E775',
                    top: 5,
                    right: -60,
                    width: 170,
                    height: 40,
                    borderRadius: 200,
                    opacity: 0.5,
                  }}></View>
                <Icon
                  name="checkmark-circle-sharp"
                  style={{
                    fontSize: 40,
                    color: '#06E775',
                    top: -37,
                    left: -70,
                  }}
                />
                <Text style={{ position: 'absolute',top:70,left:70,fontSize: 14,color: 'white',fontWeight: 'bold'}}>ยืนยันตัวตนแล้ว</Text>
              </Right>
            </CardItem>
            <CardItem
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                marginTop: 10,
                marginBottom: 0,
                paddingBottom: 0,
                alignSelf: 'center',
              }}>
              <Button style={styles.callnowBtn}>
                <Text
                  style={{
                    color: '#18A0FB',
                    fontWeight: 'bold',
                    paddingLeft: 48,
                  }}>
                  โทรเลย
                </Text>
              </Button>
              <Button style={styles.chatnowBtn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingLeft: 48,
                  }}>
                  แชทเลย
                </Text>
              </Button>
            </CardItem>
            <Text
              style={{
                marginTop: 2,
                textDecorationLine: 'underline',
                fontSize: 12,
                color: '#18A0FB',
                alignSelf: 'center',
                marginTop: 15,
              }}>
              รายละเอียดเพิ่มเติม
            </Text>
          </Card>
        </Content>
      </View>
    </Container>
  );
};

export { UserSideJobCard };
