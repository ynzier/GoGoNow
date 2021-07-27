import React, { useState } from 'react';

import UserFooter from '../components/user-footer';
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  CheckBox,
  Text,
  View,
  Body,
  Textarea,
  Button,
  Center,
} from 'native-base';
import { StatusBar, StyleSheet, Dimensions } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const deviceWidth = Dimensions.get('window').width;
  const { bookingID } = route.params;
  const [jobStatus, setjobStatus] = useState(1); // 0 = not accept yet , 1 = accepted, 2 = more detail
  const styles = StyleSheet.create({
    iconStarM: {
      color: '#FFE000',
      fontSize: 30,
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },
    btnLogIn: {
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
      height: 51,
      marginBottom: 20
    },
  });
  return (
    <Container>
      <View style={styles.container}>
        <Header style={{ backgroundColor: 'white' }}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <Left style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Icon
                name="chevron-back-outline"
                style={{ fontSize: 20, color: '#18A0FB' }}
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{ fontSize: 16, alignSelf: 'center', color: '#18A0FB' }}
                onPress={() => navigation.goBack()}>
                Back
              </Text>
            </View>
          </Left>
          <Text style={{ alignSelf: 'center', fontSize: 16 }}>
            ให้คะแนนบริการ
          </Text>
          <Right style={{ flex: 1 }}>
            <Icon
              name="ellipsis-horizontal"
              style={{ fontSize: 20, color: '#18A0FB' }}
            />
          </Right>
        </Header>
        <Body>
          <View
            style={{
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              height: 100,
            }}>
            <View style={{ width: '90%', flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, lineHeight: 30 }}>
                  หมายเลขการจอง {bookingID.ID}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#18A0FB',
                  }}>
                  Go Health
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#18A0FB',
                  }}>
                  บริการพาไปพบแพทย์
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 12 }}>วันที่นัดหมาย เวลานัด</Text>
                <Text style={{ fontSize: 12 }}>
                  {bookingID.date} {bookingID.time}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star-outline" style={styles.iconStarM} />
            <Icon name="star-outline" style={styles.iconStarM} />
            <Icon name="star-outline" style={styles.iconStarM} />
            <Icon name="star-outline" style={styles.iconStarM} />
            <Icon name="star-outline" style={styles.iconStarM} />
          </View>
          <View style={{ flex: 6, position: 'relative', width: 350 }}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
              <View>
                <Text style={{ alignContent: 'flex-start', fontSize: 12 }}>
                  กรุณาบอกเล่าถึงประการณ์การให้บริการของเราในครั้งนี้
                </Text>
                <Textarea
                  rowSpan={5}
                  bordered
                  placeholder="บอกเล่าประสบการณ์ของคุณที่ได้รับจากบริการของเรา"
                />
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <CheckBox style={{ marginRight: 20 }} color="#E8E8E8" />
                  <Text style={{ fontSize: 12 }}>รีวิวโดยไม่เปิดเผยชื่อ</Text>
                </View>
              </View>
            </View>
          </View>
        </Body>
        <Button rounded style={styles.btnLogIn}>
          <Text
            style={{ fontSize: 16, fontWeight: 'bold' }}
            onPress={() => navigation.navigate('')}>
            ให้คะแนนบริการ
          </Text>
        </Button>
        <UserFooter history />
      </View>
    </Container>
  );
};

export default DetailsScreen;
