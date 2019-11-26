import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class AboutScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar}
                            source={{ uri: 'https://scontent.fupg2-1.fna.fbcdn.net/v/t1.0-9/21463354_1504642682959132_7439321247587947031_n.jpg?_nc_cat=103&_nc_eui2=AeGdH4qD_rqfkH5E8WehTdrPG4ANY3zFpiCfD5CcoZ2AbT5W7eoM_tf20bkHdYdOHoYrH_VNowakxTqbTe4CrpZft0ocmbpuYbpeBPRNFObw3Q&_nc_ohc=G1B6owII3_0AQl2HCqpRVNvJexExyEzvLaOgfac2XoKeRDuqFpDa-Q88A&_nc_ht=scontent.fupg2-1.fna&oh=8719761c34b26c90ca3782a419a0cf38&oe=5E86BC31' }} />
                        <Text></Text>
                        <Text></Text>
                        <Text style={styles.name}>
                            Taroreh, Farry J
                        </Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.textInfo}>
                            Email : S11610030@student.unklab.ac.id
                        </Text>
                        <Text style={styles.textInfo}>
                            Semester : 7
                        </Text>
                        <Text style={styles.textInfo}>
                            Tingkat : 4
                        </Text>
                        <Text></Text>
                        <Image style={styles.avatar} source={require('../assets/fik.png')} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1E90FF",
    },
    headerContent: {
        padding: 60,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    textInfo: {
        fontSize: 18,
        marginTop: 20,
        color: "#696969",
        textAlign: 'justify'
    }
});