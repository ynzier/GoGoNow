import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, View, Text, Body } from 'native-base';
import UserFooter from '../components/user-footer';
import TopBar from '../components/top-bar';
import HistoryCard from '../components/history-card';
const Home = ({ navigation }) => {
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
  });

  return (
    <Container>
      <View style={styles.container}>
        <TopBar page="BOOKING HISTORY" />
        <Body>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  textDecorationLine: tab == 0 ? 'underline' : 'none',
                  color: tab == 0 ? '#18A0FB' : '#BDBDBD',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                onPress={() => setTab(0)}>
                นัดหมายบริการ
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  textDecorationLine: tab == 1 ? 'underline' : 'none',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: tab == 1 ? '#18A0FB' : '#BDBDBD',
                }}
                onPress={() => setTab(1)}>
                เสร็จสมบูรณ์
              </Text>
            </View>
          </View>
        </Body>
        <View style={{ flex: 8 }}>
          {tab == 0 ? (
            <>
              <HistoryCard i="0" finished="0" />
              <HistoryCard i="1" finished="0" />
            </>
          ) : (
            <>
              <HistoryCard i="1" finished="1"/>
              <HistoryCard i="0" finished="1" star="5" />
            </>
          )}
        </View>
        <UserFooter history />
      </View>
    </Container>
  );
};
export default Home;
