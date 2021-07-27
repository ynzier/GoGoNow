import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Icon, Button, Text } from 'native-base';
import { ScrollView, Modal, StyleSheet, View, Pressable } from 'react-native';

const App = () => {
  const labels = [
    'พบคุณ' + 'สุจิตรา' + 'แล้ว',
    'กำลังเดินทางไปโรงพยาบาล',
    'ถึงโรงพยาบาล',
    'คัดกรอง',
    'ตรวจร่างกายขั้นต้น',
    'รอพบแพทย์',
    'พบแพทย์ตรวจ',
    'รอพบแพทย์',
    'ชำระเงิน',
    'รับยา',
    'พากลับบ้าน',
    'ถึงบ้าน',
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#18A0FB',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#18A0FB',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#18A0FB',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#18A0FB',
    stepIndicatorUnFinishedColor: '#CACCCF',
    stepIndicatorCurrentColor: '#CACCCF',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    labelColor: '#696969',
    labelSize: 13,
    labelAlign: 'flex-start',
    stepIndicatorLabelCurrentColor: '#aaaaaa',
    stepIndicatorLabelFinishedColor: '#18A0FB',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    currentStepLabelColor: '#18A0FB',
  };
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      marginLeft: 23,
      marginRight: 23,
    },
    modalView: {
      width: '100%',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 50,
      padding: 10,
      elevation: 2,
      height: 40,
      width: 140,
    },
    buttonAccept: {
      backgroundColor: '#18A0FB',
    },
    buttonDecline: {
      backgroundColor: 'white',
      marginRight: 20,
      borderColor: '#18A0FB',
      borderWidth: 1,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textStyleCancel: {
      color: '#18A0FB',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  const [currentPosition, setcurrentPosition] = useState(2);
  const [modalVisible, setmodalVisible] = useState(false);
  const renderStepIndicator = () => (
    <Icon name="checkmark-outline" style={{ fontSize: 15, color: 'white' }} />
  );

  return (
    <>
      <View style={{ width: '100%' }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 23,
            fontWeight: 'bold',
          }}>
          STATUS
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            height: 600,
            marginBottom: 10,
          }}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setmodalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>กรุณายืนยันสถานะบริการ</Text>
                <Text style={styles.modalText}>ขณะนี้คุณ...</Text>
                <Text style={styles.modalText}>{labels[currentPosition]}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Pressable
                    style={[styles.button, styles.buttonDecline]}
                    onPress={() => setmodalVisible(!modalVisible)}>
                    <Text style={styles.textStyleCancel}>ยกเลิก</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonAccept]}
                    onPress={() => {
                      setmodalVisible(!modalVisible);
                      setcurrentPosition(currentPosition + 1);
                    }}>
                    <Text style={styles.textStyle}>ยืนยัน</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <StepIndicator
            stepCount={12}
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            direction="vertical"
            renderStepIndicator={renderStepIndicator}
            onPress={() => {
              if (currentPosition < 12) setmodalVisible(!modalVisible);
            }}
          />
          {currentPosition >= 12 && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Button
                style={{
                  backgroundColor: '#18A0FB',
                  width: 140,
                  borderRadius: 50,
                  justifyContent: 'center',
                }}>
                <Text>เสร็จงานแล้ว</Text>
              </Button>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default App;
