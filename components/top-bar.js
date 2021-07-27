import React from 'react';
import { Container, Header, Left, Right, Icon, Badge, Text } from 'native-base';
import { StatusBar } from 'react-native';
const App = ({ page, navigation }) => {
  return (
    <Header noShadow style={{ backgroundColor: 'white', marginLeft: 0 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Left style={{ marginLeft: 13, flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{page}</Text>
      </Left>
      <Right style={{ marginRight: 23 }}>
        <Icon
          name="notifications"
          style={{ color: '#BDBDBD', transform: [{ rotate: '20deg' }] }}
        />
        <Badge
          style={{
            position: 'absolute',
            top: -9,
            right: -10,
            scaleX: 0.6,
            scaleY: 0.6,
            borderColor: 'white',
          }}>
          <Text style={{ fontSize: 20 }}>3</Text>
        </Badge>
      </Right>
    </Header>
  );
};

export default App;
