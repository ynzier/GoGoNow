import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Container } from 'native-base';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const CalendarCard = () => {
  LocaleConfig.locales['th'] = {
    monthNames: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ],
    monthNamesShort: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.',
      'เม.ย.',
      'พ.ค.',
      'มิ.ย.',
      'ก.ค.',
      'ส.ค.',
      'ก.ย.',
      'ต.ค.',
      'พ.ย.',
      'ธ.ค.',
    ],
    dayNames: ['S', 'M', 'T', 'W', 'TH', 'F', 'SAT'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'TH', 'F', 'SAT'],
    today: 'วันนี้',
  };
  LocaleConfig.defaultLocale = 'th';

  const calendarTheme = {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#00adf5',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#18A0FB',
    selectedDayTextColor: 'black',
    dayTextColor: 'black',
    textDisabledColor: 'white',
    dotColor: '#18A0FB',
    selectedDotColor: '#18A0FB',
    arrowColor: 'white',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: '#18A0FB',
    indicatorColor: 'blue',
    todayTextColor: 'black',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: 'bold',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    'stylesheet.calendar.header': {
      header: {
        backgroundColor: '#18A0FB',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      monthText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
      },
    },
    'stylesheet.calendar.main': {
      week: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 3,
        paddingBottom: 3,
      },
    },
  };
  const styles = StyleSheet.create({
    calendarStyle: {
      height: 250,
      width: '100%',
      height: '100%',
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 10,
    },
  });

  return (
    <Container style={{ height: 330, marginTop:15,marginBottom:15 }}>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginRight: 13,
          marginLeft: 13,
        }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          MY CALENDAR
        </Text>
        <Calendar
          monthFormat={'MMMM'}
          markedDates={{
            '2021-06-16': { selected: true, selectedColor: '#18A0FB' },
            '2021-06-19': { selected: true, selectedColor: '#18A0FB' },
            '2021-06-21': { selected: true, selectedColor: '#18A0FB' },
          }}
          horizontal={true}
          style={styles.calendarStyle}
          theme={calendarTheme}
        />
      </View>
    </Container>
  );
};

export default CalendarCard;
