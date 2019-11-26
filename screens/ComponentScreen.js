import React from 'react';
import { Text, StyleSheet, View, ImageBackground, WebView } from 'react-native';

const ComponentScreen = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: "https://www.youtube.com/embed/KpHHV4FIzfg" }}
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


