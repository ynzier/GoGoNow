import React, { useState } from 'react';
import {  Modal, StyleSheet } from 'react-native';
import {
  View,
  Button,
  Content,
  Text,
  Icon,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';

const historyCard = props => {
  const navigation = useNavigation();

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
  const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    iconStarM: {
      color: '#FFE000',
      fontSize: 16,
    },
  });

  var rows = [];
  if (props.star) {
    for (var i = 0; i < props.star; i++) {
      rows.push(<Icon name="star" key={i} style={styles.iconStarM} />);
    }
  }
  return (
    <>
      <View
        style={{
          width: '90%',
          height: 120,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: '#CFCFCF',
          borderRadius: 8,
          marginBottom: 11,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 10,
          }}>
          <View style={{ flex: 1, justifyItems: 'center' }}>
            <Text style={{ fontSize: 12 }}>
              หมายเลขการจอง {bookData[props.i].ID}
            </Text>
            <Text
              style={{ fontSize: 14, color: '#18A0FB', fontWeight: 'bold' }}>
              Go Health
            </Text>
            <Text
              style={{ fontSize: 14, color: '#18A0FB', fontWeight: 'bold' }}>
              บริการพาไปพบแพทย์
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 12 }}>วันที่นัดหมาย เวลานัด</Text>
            <Text style={{ fontSize: 12 }}>
              {bookData[props.i].date} {bookData[props.i].time}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 20,
            justifyItems: 'center',
            alignItems: 'center',
          }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12 }}>สถานะผู้ดูแลของคุณ</Text>
            <Text style={{ color: '#18A0FB', fontSize: 12 }}>
              {bookData[props.i].status}
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyItems: 'center', alignItems: 'center' }}>
            {!props.star && (
              <Button
                style={{
                  borderRadius: 100,
                  width: '80%',
                  backgroundColor: '#18A0FB',
                  alignSelf: 'center',
                  marginBottom: 5,
                }}>
                {props.finished == 0 && !props.star && (
                  <Text
                    style={{
                      marginLeft: 4,
                      alignSelf: 'center',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}
                    onPress={() =>
                      navigation.navigate('bookingDetail', {
                        bookingID: bookData[props.i],
                      })
                    }>
                    ดูประวัติผู้ดูแล
                  </Text>
                )}
                {props.finished == 1 && (
                  <Text
                    style={{
                      marginLeft: 4,
                      alignSelf: 'center',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                    onPress={() =>
                      navigation.navigate('jobreview', {
                        bookingID: bookData[props.i],
                      })
                    }>
                    ให้คะแนนบริการ
                  </Text>
                )}
              </Button>
            )}

            {props.star > 0 ? (
              <>
                <View style={{ flexDirection: 'row' }}>{rows}</View>
              </>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default historyCard;
