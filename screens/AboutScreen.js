import React from 'react';
import { Text, StyleSheet, View, ImageBackground, WebView, Image } from 'react-native';

const AboutScreen = () => {
    return (
        <View>
            <Image source={require('../assets/about.png')} style={{
                width: 770,
                height: 770,
                resizeMode: 'contain',
                marginHorizontal: -179,
                marginVertical: 0
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});

export default AboutScreen;


