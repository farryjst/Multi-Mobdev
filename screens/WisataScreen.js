import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ImageBackground } from 'react-native';
import { AuthSession } from 'expo';

const wisata = [
    { name: 'Beach', imageUrl: '../assets/beach.jpg' },
    { name: 'Forest', imageUrl: '../assets/forest.jpg' },
    { name: 'Mountain', imageUrl: '../assets/mountain.jpg' }
];

const WisataScreen = () => {
    return (
        <ImageBackground source={require('../assets/homeBackground.png')} style={{ width: '100%', height: '100%' }}>
            <FlatList
                data={wisata}
                renderItem={({ item }) =>
                    <View style={styles.textStyle}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={{ uri: item.imageUrl }}
                        />
                        <Text >
                            {item.name}
                        </Text>
                    </View>
                }

                keyExtractor={item => item.name}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        margin: 'auto',
        alignItems: 'center'
    }
});

export default WisataScreen;