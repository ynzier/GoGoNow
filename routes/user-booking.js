import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Container, View, Button, Text, Body } from 'native-base';
import UserFooter from '../components/user-footer';
import TopBar from '../components/top-bar';
import pic1 from '../components/img/gohealthhead.png';
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
    backBtn: {
      backgroundColor: '#FFFFFF',
      borderColor: '#18A0FB',
      borderWidth: 1,
      alignSelf: 'center',
      width: 120,
      height: 60,
      borderRadius: 50,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    getnowBtn: {
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      width: 120,
      height: 60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Container>
      <View style={styles.container}>
        <TopBar page="GOGO NOW" />
        <Body>
          <ScrollView>
            <Image
              source={pic1}
              style={{
                width: 420,
                height: 200,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                color: '#18A0FB',
                alignSelf: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Go Health - บริการพาไปพบแพทย์
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 10,
                marginLeft: 40,
                marginRight: 40,
                marginTop: 20,
              }}>
              {'\t'}บริการพาผู้สูงอายุไปพบแพทย์ โดยมีผู้ดูแลส่วนตัว(Caregiver)
              ที่ผ่านการ คัดกรอง การอบรม
              และทดสอบการดูแลจากผู้เชี่ยวชาญเพื่อให้คุณมั่นใจได้ว่า
              คุณจะได้ผู้ดูแลที่มีความรู้ในการดูแลผู้ป่วยสูงอายุ อย่างมีมาตรฐาน
              ปลอดภัย ผ่านการรับรอง และเชื่อถือได้
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 40,
              }}>
              รายละเอียดการให้บริการ
            </Text>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                marginTop: 20,
                marginRight: 40,
              }}>
              1. ผู้ดูแลจะเดินทางไปรับตามที่อยู่ที่แจ้ง หรือ เจอกันที่โรงพยาบาล
            </Text>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                marginTop: 20,
                marginRight: 40,
              }}>
              2. ต่อติดยื่นบัตร และเช็คสิทธิ์คนไข้เมื่อถึงโรงพยาบาล
            </Text>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                marginTop: 20,
                marginRight: 40,
              }}>
              3. ให้ความช่วยเหลือ อำนวยความสะดวกต่าง ๆ คอยอยู่เป็นเพื่อน คอยดูแล
              ในการดำเนินขั้นตอนการรักษา และระหว่างรอรับบริการจากทางโรงพยาบาล
            </Text>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                marginTop: 20,
                marginRight: 40,
              }}>
              4. เข้าพบแพทย์พร้อมคนไข้เพื่อช่วย รับฟังข้อมูลจากการตรวจจากแพทย์
              รวมไปถึงสอบถามแนวทางในการปฏิบัติตัวที่เหมาะสม
              เพื่อนำข้อมูลที่ได้รับ ส่งต่อให้ญาติ
              หรือผู้เกี่ยวข้องให้ได้ทราบและนำไปปฏิบัติต่อไป
            </Text>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                marginTop: 20,
                marginRight: 40,
              }}>
              5. ผู้ดูแลจะพาเดินทางกลับไปส่งที่ตามที่อยู่ที่แจ้ง หรือ
              นัดรับกันที่โรงพยาบาล
            </Text>
            <Text
              style={{
                marginTop: 30,
                marginLeft: 40,
                marginRight: 40,
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              ค่าบริการ
            </Text>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 40,
                marginRight: 40,
                fontSize: 10,
              }}>
              อัตราค่าบริการ Go Health ราคา 1,500 บาท
            </Text>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 40,
                marginRight: 40,
                fontSize: 10,
                color: 'red',
              }}>
              หมายเหตุ ค่าบริการไม่รวมค่าใช้จ่ายในการเดินทาง(แท็กซี่)
              ทั้งไปและกลับโรงพยาบาล
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                marginBottom: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                style={styles.backBtn}
                onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    color: '#18A0FB',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  กลับ
                </Text>
              </Button>
              <Button style={styles.getnowBtn} 
                onPress={() => navigation.navigate('RegisUserData1')}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  จองเลย
                </Text>
              </Button>
            </View>
          </ScrollView>
        </Body>

        <UserFooter home />
      </View>
    </Container>
  );
};
export default GoGoNow;
