import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';
import {
  IconChat,
  IconWallet,
  IconProfile,
  IconMyJob,
  IconHome,
} from './svg/icons-footer';
import { useNavigation } from '@react-navigation/native';

const FooterBar = ({ home, wallet, jobs, chat, profile }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    FooterBar: {
      height: 70,
      backgroundColor: 'white',
      paddingTop: 10,
      marginTop: 0,
    },
  });
  return (
    <Footer noShadow>
      <FooterTab noShadow style={styles.FooterBar}>
        <Button
          vertical
          styles={{ marginBottom: 15 }}
          onPress={() => navigation.navigate('HomePage')}>
          <IconHome current={home} />
          <Text
            style={
              home
                ? { marginBottom: 15, fontSize: 10, color: '#18A0FB' }
                : { marginBottom: 15, fontSize: 10, color: '#C3C3C3' }
            }>
            Home
          </Text>
        </Button>
        <Button
          vertical
          style={{ marginBottom: 15 }}
          onPress={() => navigation.navigate('ShowCard')}>
          <IconWallet current={wallet} />
          <Text
            style={
              wallet
                ? { fontSize: 10, color: '#18A0FB' }
                : { fontSize: 10, color: '#C3C3C3' }
            }>
            Wallet
          </Text>
        </Button>
        <Button
          vertical
          style={{ marginBottom: 15 }}
          onPress={() => navigation.navigate('MyJobs')}>
          <IconMyJob current={jobs} />
          <Text
            style={
              jobs
                ? { fontSize: 10, color: '#18A0FB' }
                : { fontSize: 10, color: '#C3C3C3' }
            }>
            My Jobs
          </Text>
        </Button>
        <Button
          vertical
          style={{ marginBottom: 15 }}
          onPress={() => navigation.navigate('CareMessageScreen')}>
          <IconChat current={chat} />
          <Text
            style={
              chat
                ? { fontSize: 10, color: '#18A0FB' }
                : { fontSize: 10, color: '#C3C3C3' }
            }>
            Chat
          </Text>
        </Button>
        <Button
          vertical
          style={{ marginBottom: 15 }}
          onPress={() => navigation.navigate('Profile')}>
          <IconProfile current={profile} />
          <Text
            style={
              profile
                ? { fontSize: 10, color: '#18A0FB' }
                : { fontSize: 10, color: '#C3C3C3' }
            }>
            Profile
          </Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default FooterBar;
