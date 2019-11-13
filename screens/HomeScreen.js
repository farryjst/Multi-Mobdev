import React from 'react';
import { Text, View, Button, ImageBackground, BackHandler } from 'react-native';

const HomeScreen = ({ navigation, BackHandler }) => {
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
                    onPress={() => BackHandler.navigate('Exit')}
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;