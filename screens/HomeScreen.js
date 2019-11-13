import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/homeBackground.png')} style={{ width: '100%', height: '100%' }}>
            <View>
                <Text></Text>
                <Button
                    title="Tempat Wisata"
                    onPress={() => navigation.navigate('Wisata')}
                />
                <Text></Text>
                <Button
                    title="Info"
                    onPress={() => navigation.navigate('Info')}
                />
                <Text></Text>
                <Button
                    title="Exit"
                    onPress={() => navigation.navigate('Exit')}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    ButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default HomeScreen;