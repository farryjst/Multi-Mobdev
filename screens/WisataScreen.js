import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ImageBackground } from 'react-native';

const wisata = [
    { name: 'Pulisan', imageUrl: 'https://pesona.travel/media/serunya-bermain-air-di-pantai-pulisan-likupang_115800_1140.jpg' },
    { name: 'Bunaken', imageUrl: 'https://static.limakaki.com/2017/10/bunaken-dive.jpg' },
    { name: 'Danau Linow', imageUrl: 'https://www.indonesiakaya.com/uploads/_images_gallery/12__Duduk_santai_dan_memandangi_keindahan_Danau_Linow_memberikan_nuansa_ketenangan_tersendiri.jpg' }
];

const WisataScreen = () => {
    return (
        <ImageBackground source={require('../assets/homeBackground.png')} style={{ width: '100%', height: '100%' }}>
            <FlatList
                data={wisata}
                renderItem={({ item }) =>
                    <View style={styles.viewStyle}>
                        <Text></Text>
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={{ uri: item.imageUrl }}
                        />
                        <Text style={styles.textStyle} >
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
        alignItems: 'center',
        color: 'white'
    },
    viewStyle: {
        margin: 'auto',
        alignItems: 'center',
    }
});

export default WisataScreen;