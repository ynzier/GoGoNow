import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Container, Content, Text, Icon, Body } from 'native-base';
import HomeReviewComment from './home-review-card-comment';

const ReviewCard = () => {
  const styles = StyleSheet.create({
    iconStarXL: {
      color: '#FFE000',
      fontSize: 25,
    },
    iconStarL: {
      color: '#FFE000',
      fontSize: 18,
    },
  });
  return (
    <Container style={{ height: 300 }}>
      <View style={{ flexGrow: 1 }}>
        <Content
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop:20,
            marginRight: 13,
            marginLeft: 13,
            borderWidth: 1,
            borderColor: '#CFCFCF',
            borderRadius: 22,
          }}>
          <Text style={{ fontWeight: 'bold' }}>MY REVIEW</Text>
          <Body>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View>
                <Text
                  style={{
                    color: '#18A0FB',
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingTop: 14,
                    paddingLeft: 15,
                  }}>
                  RATE
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 140,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Icon name="star" style={styles.iconStarL} />
                <Icon name="star" style={styles.iconStarL} />
                <Icon name="star" style={styles.iconStarL} />
                <Icon name="star" style={styles.iconStarL} />
                <Icon name="star" style={styles.iconStarXL} />
              </View>

              <Text
                style={{
                  color: '#18A0FB',
                  fontSize: 35,
                  fontWeight: 'bold',
                }}>
                4.9
              </Text>
            </View>
          </Body>
          <View style={{ width: '100%' }}>
            <Text style={{ paddingLeft: 15, fontWeight: 'bold', }}>
              ความคิดเห็น
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#18A0FB',
              borderBottomWidth: 1,
              marginTop: 10,
              marginLeft: 5,
              marginRight: 5,
            }}
          />

          <HomeReviewComment name="สุกัญญา" issue="Go Health" star="4" />
          <HomeReviewComment name="สุกัญญา" issue="Go Health" star="5" />
          <HomeReviewComment name="สุกัญญา" issue="Go Health" star="4" />
        </Content>
      </View>
    </Container>
  );
};
export default ReviewCard;
