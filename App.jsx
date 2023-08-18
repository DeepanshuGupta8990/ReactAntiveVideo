import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
const App = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Text>Video Player</Text>
      <TouchableOpacity 
      style={{width: '100%', height: 280}}
      onPress={()=>{setClicked(!clicked)}}
      >
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          //  onBuffer={this.onBuffer}
          //  onError={this.videoError}
          style={{width: '100%', height: 280}}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: 280,
              position: 'absolute',
              backgroundColor: 'rhba(0,0,0,0.5)'
            }}></TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default App;
