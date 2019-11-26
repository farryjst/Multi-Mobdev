import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/homeBackground.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.ButtonStyle}>
                <View style={styles.DescManado}>
                    <Text style={styles.titleManado}>M A N A D O</Text>
                    <Image source={require('../assets/manado1.png')} style={styles.LogoManado} />
                    <Text style={styles.textDescManado}>    Kota Manado berada di wilayah administrasi Provinsi Sulawesi Utara, sekaligus merupakan ibu kota provinsi tersebut. Dengan Suku Minahasa sebagai suku terbesarnya, Kota Manado memiliki semboyan yang cukup unik. Yaitu Si Tou Timou Tumou Tou, sebuah seboyan hidup bagi rakyat Minahasa yang dalam bahasa Indonesia berarti “Manusia satu memanusiakan manusia lainnya”. Wilayah perairan Kota Manado juga meliputi beberapa pulau. Terdapat beberapa pulau besar di perairan Manado adalah Pulau Bunaken, Pulau Siladen dan Pulau Mantehage. Di pulau-pulau tersebut, wisata bahari menjadi wisata andalan Kota Manado. Karena pulau-pulau tersebut memang memiliki pemandangan yang sangat indah dan mengagumkan. Tak hanya itu, Anda juga akan takjub dengan keindahan pemandangan dan kekayaan bawah lautnya. Seperti contoh Pulau Bunaken dengan Taman Laut Nasional Bunaken.</Text>
                </View>
                <Text></Text>
                <Button
                    title="Explore Manado"
                    onPress={() => navigation.navigate('Wisata')}
                />
                <Text></Text>
                <Button
                    title="Maps"
                    onPress={() => navigation.navigate('Galery')}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Component')}>
                    <View>
                        <Image source={require('../assets/manado.png')} style={styles.ManadoStyle} />
                    </View>
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
        width: '115%',
        height: '65%',
        marginHorizontal: -29
    },
    DescManado: {
        width: '100%',
        height: '60%',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(255, 255 ,255, .2)',
        paddingTop: 20
    },
    titleManado: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 5
    },
    textDescManado: {
        color: 'white',
        fontSize: 16,
        paddingTop: 50
    },
    LogoManado: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginVertical: -35,
        marginHorizontal: 210
    }
});

export default HomeScreen;