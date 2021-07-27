import React from 'react';
import { View, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
const HomeReviewComment = ({ name, star, issue }) => {
  const styles = StyleSheet.create({
    circle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: Math.random() > 0.3 ? '#18a0fb' : '#FF9C00',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginRight: 5,
    },
    iconStarM: {
      color: '#FFE000',
      fontSize: 16,
    },
  });
  const Circle = () => {
    return <View style={styles.circle}></View>;
  };
  var rows = [];
  for (var i = 0; i < star; i++) {
    rows.push(<Icon name="star" key={i} style={styles.iconStarM} />);
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        paddingRight: 0,
        paddingBottom: 10,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        borderBottomWidth: 0.5,
      }}>
      <Circle />
      <View>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#18A0FB' }}>
          {issue}
        </Text>
        <Text style={{ fontSize: 12, color: '#A6A6A6', fontWeight: 'bold' }}>
          {name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 180,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          position: 'absolute',
          right: 0,
        }}>
        <View style={{ flexDirection: 'row' }}>{rows}</View>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#18A0FB' }}>
          {star}
        </Text>
      </View>
    </View>
  );
};

export default HomeReviewComment;
