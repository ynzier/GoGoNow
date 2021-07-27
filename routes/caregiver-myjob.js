import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Left, Right, Text, View, Body } from 'native-base';
import { JobCard } from '../components/myjob-job-card';
import NextJob from '../components/myjob-nextjob-card';
import FooterBar from '../components/footer-tab';
import TopBar from '../components/top-bar';
import JobStep from '../components/myjob-progress-step';
const MyJobs = ({ navigation }) => {
  const [jobStatus, setjobStatus] = useState(0); // 0 = not accept yet , 1 = accepted, 2 = more detail
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
        <TopBar page="GoGo Care Now" />
        <Body style={{ width: '100%' }}>
          <View style={{ height: jobStatus == 2 ? 550 : 270 }}>
            <JobCard setjobStatus={setjobStatus} jobStatus={jobStatus} />
          </View>
          {(jobStatus == 0 && (
            <>
              <View style={{ width: '100%' }}>
                <Text
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                    marginLeft: 23,
                    fontWeight: 'bold',
                  }}>
                  NEXT JOB
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 230,
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 30,
                }}>
                <FlatList
                  style={{ marginLeft: 20 }}
                  data={[{ key: 'Devin' }, { key: 'Dan' }]}
                  renderItem={() => <NextJob />}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </>
          )) ||
            (jobStatus == 1 && (
              <>
                <JobStep />
              </>
            ))}
        </Body>
        <FooterBar jobs />
      </View>
    </Container>
  );
};
export default MyJobs;
