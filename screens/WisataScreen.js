import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';

const wisata = [
    { name: 'PULISAN', imageUrl: 'https://pesona.travel/media/serunya-bermain-air-di-pantai-pulisan-likupang_115800_1140.jpg' },
    { name: 'BUNAKEN', imageUrl: 'https://static.limakaki.com/2017/10/bunaken-dive.jpg' },
    { name: 'DANAU LINAU', imageUrl: 'https://www.indonesiakaya.com/uploads/_images_gallery/12__Duduk_santai_dan_memandangi_keindahan_Danau_Linow_memberikan_nuansa_ketenangan_tersendiri.jpg' },
    { name: 'SILADEN', imageUrl: 'https://2.bp.blogspot.com/-RDxWZeOgl6U/WACJu5AKdGI/AAAAAAAAGG8/MYEeG3SIHC8QBjP8lnv_OOw9jDRBhRuNgCLcB/s640/Wisata%2BPulau%2BSiladen%2B1.jpg' },
    { name: 'MANTEHAGE', imageUrl: 'https://www.befren.com/wp-content/uploads/2018/04/befren-640x427.jpg' }
];

const WisataScreen = () => {
    return (
        <ImageBackground source={require('../assets/exploreBackground.jpg')} style={{ width: '100%', height: '100%' }}>
            <FlatList
                data={wisata}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity onPress={() => Alert.alert('Error', 'Page not found!')} >
                            <Image style={styles.viewStyle} source={{ uri: item.imageUrl }} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>{item.name}</Text>
                    </View>
                }
                keyExtractor={item => item.name}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        color: 'white',
        flexDirection: 'row'
    },
    viewStyle: {
        flex: 1,
        height: 250,
        marginTop: 20,
        width: null
    }
});

export default WisataScreen;