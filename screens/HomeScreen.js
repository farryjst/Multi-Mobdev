import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/homeBackground.png')} style={{ width: '100%', height: '100%' }}>
            <View>
                <View style={styles.DescManado}>
                    <Text style={styles.titleManado}>M A N A D O</Text>
                    <Image source={require('../assets/manado1.png')} style={styles.LogoManado} />
                    <Text style={styles.textDescManado}>    Kota Manado berada di wilayah administrasi Provinsi Sulawesi Utara, sekaligus merupakan ibu kota provinsi tersebut. Dengan Suku Minahasa sebagai suku terbesarnya, Kota Manado memiliki semboyan yang cukup unik. Yaitu Si Tou Timou Tumou Tou, sebuah seboyan hidup bagi rakyat Minahasa yang dalam bahasa Indonesia berarti “Manusia satu memanusiakan manusia lainnya”. Wilayah perairan Kota Manado juga meliputi beberapa pulau. Terdapat beberapa pulau besar di perairan Manado adalah Pulau Bunaken, Pulau Siladen dan Pulau Mantehage. Di pulau-pulau tersebut, wisata bahari menjadi wisata andalan Kota Manado. Karena pulau-pulau tersebut memang memiliki pemandangan yang sangat indah dan mengagumkan. Tak hanya itu, Anda juga akan takjub dengan keindahan pemandangan dan kekayaan bawah lautnya. Seperti contoh Pulau Bunaken dengan Taman Laut Nasional Bunaken.</Text>
                </View>
                <Text></Text>
                <View style={styles.ButtonCont}>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Wisata')} >
                        <Text style={{ color: 'white' }}>EXPLORE WISATA MANADO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Galery')}>
                        <Text style={{ color: 'white' }}>EXPLORE MAPS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('About')}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>ABOUT</Text>
                    </TouchableOpacity>
                    {/* <Button
                        title="Explore Manado"
                        onPress={() => navigation.navigate('Wisata')}
                    />
                    <Text></Text>
                    <Button
                        title="Maps"
                        onPress={() => navigation.navigate('Galery')}
                    /> */}
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Component')}>
                    <Image source={require('../assets/manado.png')} style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 110,
                        marginVertical: -40
                    }} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    ButtonCont: {
        paddingLeft: 50,
        paddingRight: 50,
        // backgroundColor: 'rgba(34, 49, 63, .2)',
    },
    ButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#20639B',
        justifyContent: 'center',
        borderRadius: 60,
        marginVertical: 15,
        paddingTop: 15,
        paddingBottom: 15

    },
    DescManado: {
        width: '100%',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: 'rgba(34, 49, 63, .2)',
        paddingTop: 10,
        paddingBottom: 20,
    },
    titleManado: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
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
        paddingTop: 50,
        textAlign: 'justify'
    },
    LogoManado: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginVertical: -37,
        marginHorizontal: 50
    }
});

export default HomeScreen;