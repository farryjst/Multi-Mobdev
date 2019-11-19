import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/homeBackground.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.ButtonStyle}>
                <View style={styles.DescManado}>
                    <Text style={styles.titleManado}>M A N A D O</Text>
                    <Text style={styles.textDescManado}>    Kota Manado berada di wilayah administrasi Provinsi Sulawesi Utara, sekaligus merupakan ibu kota provinsi tersebut. Dengan Suku Minahasa sebagai suku terbesarnya, Kota Manado memiliki semboyan yang cukup unik. Yaitu Si Tou Timou Tumou Tou, sebuah seboyan hidup bagi rakyat Minahasa yang dalam bahasa Indonesia berarti “Manusia satu memanusiakan manusia lainnya”. Wilayah perairan Kota Manado juga meliputi beberapa pulau. Terdapat beberapa pulau besar di perairan Manado adalah Pulau Bunaken, Pulau Siladen dan Pulau Mantehage. Di pulau-pulau tersebut, wisata bahari menjadi wisata andalan Kota Manado. Karena pulau-pulau tersebut memang memiliki pemandangan yang sangat indah dan mengagumkan. Tak hanya itu, Anda juga akan takjub dengan keindahan pemandangan dan kekayaan bawah lautnya. Seperti contoh Pulau Bunaken dengan Taman Laut Nasional Bunaken.</Text>
                </View>
                <Text></Text>
                <Button
                    title="Explore"
                    onPress={() => navigation.navigate('Wisata')}
                />
                <TouchableOpacity>
                    <Image source={require('../assets/manado.png')} style={styles.ManadoStyle} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    ButtonStyle: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    ManadoStyle: {
        resizeMode: "contain",
        width: '100%',
        height: '30%'
    },
    DescManado: {
        width: '100%',
        height: '60%',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(255, 255 ,255, .2)'
    },
    titleManado: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 2.2,
        paddingTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textDescManado: {
        color: 'white',
        fontSize: 16,
        paddingTop: 15
    }
});

export default HomeScreen;