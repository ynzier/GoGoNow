import React from 'react';
import {FlatList} from 'react-native'
import { View } from 'native-base';
import JobCard from './home-job-card';
const JobCardFlatList = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 280,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <FlatList
        data={[{ key: 'Devin' }, { key: 'Dan' }]}
        renderItem={({ item }) => <JobCard />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default JobCardFlatList;
