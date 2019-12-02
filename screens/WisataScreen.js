import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Modal,
    ScrollView,
    ImageBackground
} from 'react-native';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [
                { id: 1, name: "Pulisan", position: "Likupang", image: "https://assets-a2.kompasiana.com/items/album/2018/11/11/dsc-0662-5be71463677ffb580a496e07.jpg?t=o&v=350", about: "Pasir pantai yang indah, bebatuan yang eksotis serta bukit savana yang memukau. Pemandangan komplit yang bisa dinikmati di Pantai Pulisan, Kecamatan Likupang, Kabupaten Minahasa Utara, Sulawesi Utara. Pantai ini terletak kurang lebih 2 jam perjalanan dari Kota Manado arah ke Likupang Timur. Seakan memiliki magnet, Pantai Pulisan dapat menarik masyarakat untuk menikmati sajian alam dengan beragam pesonanya." },
                { id: 2, name: "Bunaken", position: "Teluk Manado", image: "https://cdn0-production-images-kly.akamaized.net/XvOBrhm59ErFklrWv_8imr9ua1M=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1521558/original/028704100_1488256531-6._Taman_Laut_Bunaken_-_Reservasi.jpg", about: "Bunaken adalah sebuah pulau seluas 8,08 km² di Teluk Manado, yang terletak di utara pulau Sulawesi, Indonesia. Pulau ini merupakan bagian dari kota Manado, ibu kota provinsi Sulawesi Utara, Indonesia. Pulau Bunaken dapat di tempuh dengan kapal cepat (speed boat) atau kapal sewaan dengan perjalanan sekitar 30 menit dari pelabuhan kota Manado. Di sekitar pulau Bunaken terdapat taman laut Bunaken yang merupakan bagian dari Taman Nasional Bunaken. Taman laut ini memiliki biodiversitas kelautan salah satu yang tertinggi di dunia. Selam scuba menarik banyak pengunjung ke pulau ini. Secara keseluruhan taman laut Bunaken meliputi area seluas 75.265 hektare dengan lima pulau yang berada di dalamnya, yakni Pulau Manado Tua (Manarauw), Pulau Bunaken, Pulau Siladen, Pulau Mantehage berikut beberapa anak pulaunya, dan Pulau Naen. Meskipun meliputi area 75.265 hektare, lokasi penyelaman (diving) hanya terbatas di masing-masing pantai yang mengelilingi kelima pulau itu." },
                { id: 3, name: "Danau Linow", position: "Tomohon", image: "https://www.indonesiakaya.com/uploads/_images_gallery/12__Duduk_santai_dan_memandangi_keindahan_Danau_Linow_memberikan_nuansa_ketenangan_tersendiri.jpg", about: "Berjarak 30 km dari Kota Manado atau memakan waktu sekitar 1 jam perjalanan, Danau Linow dapat ditempuh 3 km arah ke barat dari Kota Tomohon. Selama perjalanan, kita disajikan pemandangan hijau dari perbukitan yang ditumbuhi pepohonan besar. Gunung Lokon yang masih aktif juga ikut menjadi panorama yang tersaji di sini. Memiliki bentuk hampir segitiga sempurna, gunung ini seakan memanjakan mata dengan hijaunya pepohonan." }]
        };
    }
    clickEventListener = (item) => {
        this.setState({ userSelected: item }, () => {
            this.setModalVisible(true);
        });
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.userList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.position}>{item.position}</Text>
                                    <TouchableOpacity style={styles.followButton} onPress={() => this.clickEventListener(item)}>
                                        <Text style={styles.followButtonText}>Details</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }} />
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                                <ScrollView contentContainerStyle={styles.modalInfo}>
                                    <Image style={styles.image} source={{ uri: this.state.userSelected.image }} />
                                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                                    <Text style={styles.position}>{this.state.userSelected.position}</Text>
                                    <Text style={styles.about}>{this.state.userSelected.about}</Text>
                                </ScrollView>
                            </View>
                            <View style={styles.popupButtons}>
                                <TouchableOpacity onPress={() => { this.setModalVisible(false) }} style={styles.btnClose}>
                                    <Text style={styles.txtClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b3c7d6ff",
        paddingTop: 20
    },
    header: {
        backgroundColor: "#00CED1",
        height: 200
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
        flex: 1,
    },
    detailContent: {
        top: 80,
        height: 500,
        width: Dimensions.get('screen').width - 90,
        marginHorizontal: 30,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff"
    },
    userList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 25,
    },
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row'
    },

    name: {
        fontSize: 25,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        paddingBottom: 100
    },
    about: {
        marginHorizontal: 10,
        textAlign: 'justify',
    },

    followButton: {
        marginHorizontal: 30,
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#00BFFF",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 56
    },
    popupContent: {
        //alignItems: 'center',
        margin: 5,
        height: 250,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 20,
        backgroundColor: '#20b2aa',
        padding: 20
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtClose: {
        marginTop: -10,
        color: 'white'
    }
}); 