import * as React from 'react';
import {View, Text} from 'react-native';

export default function Restaurant ({navigation}){
  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Restaurant" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Restaurant Screen</Text>
        </View>
  );
}