import React from 'react';
import Video from 'react-native-video';
import { View } from 'react-native';

const VideoScreen = () => {
    return (
        <View>
            <Video source={require('../assets/video.mp4')}
            />
        </View>
    )
}

export default VideoScreen;