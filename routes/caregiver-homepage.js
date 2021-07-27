import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Left, Right, View } from 'native-base';
import JobCardFlatList from '../components/home-job-flatlist';
import ReviewCard from '../components/home-review-card';
import CalendarCard from '../components/home-calendar-card';
import FooterBar from '../components/footer-tab';
import TopBar from '../components/top-bar';

const Home = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <TopBar page="NEW JOB" />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <JobCardFlatList />
          <CalendarCard />
          <ReviewCard />
        </ScrollView>
        <FooterBar home />
      </View>
    </Container>
  );
};
export default Home;
