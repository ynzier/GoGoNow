import React from 'react';
import {View, StyleSheet, FlatList, AsyncStorage, Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Header,
  Footer,
  FooterTab,
  Badge,
  Form,
  Grid,
  Row,
  Col,
} from 'native-base';
import {LogoGogo} from '../components/Svg/my-wallet-card';

import FooterBar from '../components/footer-tab';
const Profile = ({navigation}) => {
  const styles = StyleSheet.create({
    HeaderStyle: {
      backgroundColor: '#fff',
    },
    HeaderBar: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    TitleBar: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
    ContentImg: {
      height: '30%',
      backgroundColor: 'rgba(24, 160, 251, 1)',
    },
    img: {
      height: 120,
      width: 120,
      borderRadius: 80,
      marginTop: 30,
    },
    MainChoicePage: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    ChoicePage: {
      color: 'rgba(229, 229, 229, 1)',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    ChoiceMain: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      borderBottomColor: 'rgba(255, 255, 255, 1)',
      borderBottomWidth: 3,
    },
    Topic: {
      fontWeight: 'bold',
      marginLeft: 30,
    },
    LineTopic: {
      borderBottomColor: 'rgba(202, 204, 207, 1)',
      borderBottomWidth: 1,
    },
    RowStyle: {
      marginTop: 20,
      paddingBottom: 20,
      borderBottomColor: 'rgba(202, 204, 207, 1)',
      borderBottomWidth: 0.5,
    },
    RowBottom: {
      marginTop: 20,
      paddingBottom: 20,
    },
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',

      //   flex: 1,
    },
    IconBar: {
      color: '#C3C3C3',
    },
    TitleText: {
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 20,
      marginTop: 40,
      marginLeft: 25,
    },
    Button: {
      backgroundColor: '#18A0FB',
      width: '90%',
      height: 50,
      borderRadius: 50,
      marginTop: 20,
      alignSelf: 'center',
      marginBottom: 20,
    },
    GreenBox: {
      backgroundColor: 'rgba(6, 231, 117, 0.5)',
      paddingBottom: 5,
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 70,
      borderRadius: 200,
      alignSelf: 'center',
      flexDirection: 'row',
      marginLeft: 20,
    },
    GreenText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
      alignSelf: 'center',
    },
    GreenIcon: {
      color: '#fff',
      fontSize: 18,
      alignSelf: 'flex-end',
      marginTop: 2,
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
    },
    GreenCircle: {
      backgroundColor: '#06E775',
      borderRadius: 300,
      marginRight: 5,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
    },
  });
  return (
    <Container>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>MY PROFILE</Text>
        </Left>
        <Right style={{marginRight: 23}}>
          <Icon
            name="notifications"
            style={{color: '#BDBDBD', transform: [{rotate: '20deg'}]}}
            onPress={() => navigation.navigate('')}
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
            <Text style={{fontSize: 20}}>3</Text>
          </Badge>
        </Right>
      </Header>

      <View style={styles.ContentImg}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Left style={{flex: 1, marginLeft: 20}}>
            <View>
              <Image
                style={styles.img}
                source={require('../assets/images/sammy-williams.jpg')}
              />
              <Badge
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  left: 50,
                  top: -40,
                  scaleX: 0.8,
                  scaleY: 0.8,
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                }}>
                <Icon
                  name="camera"
                  style={{color: '#C4C4C4', fontSize: 30}}
                  onPress={() => navigation.navigate('')}
                />
              </Badge>
            </View>
          </Left>
          <Body style={{flex: 2, marginLeft: 25}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              ??????????????? ?????????????????????
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: 30,
                paddingLeft: 20,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  No. 202100001
                </Text>
              </View>
              <View style={styles.GreenBox}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <View style={styles.GreenCircle}>
                    <Icon name="checkmark-outline" style={styles.GreenIcon} />
                  </View>

                  <Text style={styles.GreenText}>?????????????????????????????????????????????</Text>
                </View>
              </View>
            </View>
          </Body>
        </View>

        <View noShadow style={{flexDirection: 'row', marginBottom: 20}}>
          <Left>
            <Text
              style={styles.ChoiceMain}
              onPress={() => navigation.navigate('Profile')}>
              ??????????????????????????????????????????
            </Text>
          </Left>
          <Body>
            <Text
              style={styles.ChoicePage}
              onPress={() => navigation.navigate('ProfileSkills')}>
              ??????????????????????????????????????????
            </Text>
          </Body>
          <Right>
            <Text
              style={styles.ChoicePage}
              onPress={() => navigation.navigate('ProfileSetup')}>
              ??????????????????????????????
            </Text>
          </Right>
        </View>
      </View>

      <Content noShadow>
        <Form>
          <Grid>
            <Row style={styles.RowStyle}>
              <Col>
                <Text style={styles.Topic}>??????????????????????????????</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'left'}}>??????????????? ?????????????????????</Text>
              </Col>
            </Row>

            <Row style={styles.RowStyle}>
              <Col>
                <Text style={styles.Topic}>?????????</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'left', alignSelf: 'stretch'}}>
                  ????????????
                </Text>
              </Col>
            </Row>

            <Row style={styles.RowStyle}>
              <Col>
                <Text style={styles.Topic}>????????????</Text>
              </Col>
              <Col>
                <Text>31 ??????</Text>
              </Col>
            </Row>

            <Row style={styles.RowStyle}>
              <Col>
                <Text style={styles.Topic}>????????????????????????</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'left', alignSelf: 'stretch'}}>
                  091 648 xxxxx
                </Text>
              </Col>
            </Row>

            <Row style={styles.RowStyle}>
              <Col>
                <Text style={styles.Topic}>E-mail</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'left', alignSelf: 'stretch'}}>
                  xxxxxxx@hotmail.com
                </Text>
              </Col>
            </Row>

            <Row style={styles.RowBottom}>
              <Col>
                <Text style={styles.Topic}>?????????????????????</Text>
              </Col>
              <Col>
                <Text
                  style={{
                    textAlign: 'left',
                    alignSelf: 'stretch',
                    marginRight: 10,
                  }}>
                  xx/xxx ???.??????????????? ??????????????????????????? ??????????????????????????????????????? 10xxx
                </Text>
              </Col>
            </Row>
          </Grid>

          <Button
            block
            style={styles.Button}
            onPress={() => navigation.navigate('ProfileSkills')}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              ??????????????????
            </Text>
          </Button>
        </Form>
      </Content>

        <FooterBar profile />
    </Container>
  );
};
export default Profile;
