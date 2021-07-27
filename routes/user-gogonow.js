import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, View, Button, Text, Body } from 'native-base';
import UserFooter from '../components/user-footer';
import TopBar from '../components/top-bar';
import pic1 from '../components/img/gohealth1.png';
import { UserSideJobCard } from '../components/history-jobcard';
import { HostpitalStop, OnTheWay } from '../components/svg/gogonow-icon';

const GoGoNow = ({ navigation }) => {
  const [tab, setTab] = useState(0);
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },

    btnAllStatus: {
      backgroundColor: '#FFF',
      marginTop: 10,
      alignSelf: 'center',
      width: 160,
      justifyContent: 'center',
      height: 50,
      borderColor: '#18A0FB',
      borderWidth: 1,
    },
  });
  const bookData = [
    {
      ID: 'G02024',
      status: 'ยืนยันผู้ดูแลของคุณแล้ว',
      date: '16/06/2021',
      time: '06:00',
    },
    {
      ID: 'G02698',
      status: 'กำลังคัดเลือกผู้ดูแล...',
      date: '15/07/2021',
      time: '06:00',
    },
  ];
  return (
    <Container>
      <View style={styles.container}>
        <TopBar page="GOGO NOW" />
        <Body>
          <View>
            <View style={{ height: 280 }}>
              <UserSideJobCard />
            </View>
            <View style={{ flex: 1, marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>STATUS</Text>
              <View style={{ width: '100%', marginLeft: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <OnTheWay />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text>สถานะ....</Text>
                    <Text style={{color:"#18A0FB"}}>กำลังเดินทางไปโรงพยาบาล</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <View style={{ flex: 1 }}>
                    <HostpitalStop />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{color:"#18A0FB"}}>เดินทางถึงโรงพยาบาล</Text>
                    <Text style={{color:"#18A0FB"}}>เรียบร้อยแล้ว</Text>
                  </View>
                </View>
              </View>
            </View>
            <Button rounded style={styles.btnAllStatus}>
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: '#18A0FB' }}
                onPress={() => navigation.navigate('')}>
                ดูสถานะทั้งหมด
              </Text>
            </Button>
          </View>
        </Body>

        <UserFooter jobs />
      </View>
    </Container>
  );
};
export default GoGoNow;
