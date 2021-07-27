import React, { useState } from 'react';

import UserFooter from '../components/user-footer';
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Text,
  View,
  Body,
  Center,
} from 'native-base';
import { StatusBar, StyleSheet } from 'react-native';

import { UserSideJobCard } from '../components/history-jobcard';

const DetailsScreen = ({ route, navigation }) => {
  const { bookingID } = route.params;
  const [jobStatus, setjobStatus] = useState(1); // 0 = not accept yet , 1 = accepted, 2 = more detail
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
            หมายเลขการจอง {bookingID.ID}
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
            <View style={{ flex: 1, alignSelf: 'flex-start' }}>
              <Text style={{ fontSize: 12, lineHeight: 30 }}>
                สถานะผู้ดูแลของคุณ
              </Text>
              <Text style={{ color: '#18A0FB', fontSize: 12 }}>
                {bookingID.status}
              </Text>
            </View>
          </View>
          <View style={{ flex: 10 }}>
            <UserSideJobCard jobStatus={jobStatus} />
          </View>
          <View style={{ flex: 6, position: 'relative', width: 350 }}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View>
                <Text style={{ alignContent: 'flex-start', fontSize: 12 }}>
                  แก้ไขประวัติผู้เข้ารับการบริการ
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                style={{
                  fontSize: 20,
                  color: '#18A0FB',
                  position: 'absolute',
                  right: 0,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View>
                <Text style={{ alignContent: 'flex-start', fontSize: 12 }}>
                  แก้ไขวันและเวลาการเข้ารับบริการ/ยกเลิกบริการ
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                style={{
                  fontSize: 20,
                  color: '#18A0FB',
                  position: 'absolute',
                  right: 0,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View>
                <Text style={{ alignContent: 'flex-start', fontSize: 12 }}>
                  ติดต่อเพื่อช่วยเหลือ
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                style={{
                  fontSize: 20,
                  color: '#18A0FB',
                  position: 'absolute',
                  right: 0,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </Body>
        <UserFooter history />
      </View>
    </Container>
  );
};

export default DetailsScreen;
