import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import {
  SafeAreaView
} from 'react-native-safe-area-context';

function App(){
  return(
    <SafeAreaView>
      <View>
        <Text>
          Hello World !
        </Text>
        <Text>
          I Love learning react native. This is my first app and i really enjoyed while building this.
        </Text>
      </View>
    </SafeAreaView>
  )
}
export default App;