import React from 'react';
import { Text, StyleSheet, View, ImageBackground, WebView } from 'react-native';

const ComponentScreen = () => {
    return (
        <View style={styles.container}>
            <WebView style={{
            }}
                mediaPlaybackRequiresUserAction={true}
                javaScriptEnable={true}
                domStorageEnable={true}
                source={{ uri: "https://www.google.com/maps/place/Manado,+Manado+City,+North+Sulawesi/@1.5408109,124.6443997,11z/data=!3m1!4b1!4m5!3m4!1s0x32879ef9ffb30fd3:0x3030bfbcaf77280!8m2!3d1.4748305!4d124.8420794" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 766
    }
});

export default ComponentScreen;


