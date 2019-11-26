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
                { id: 1, name: "Pulisan", image: "https://assets-a2.kompasiana.com/items/album/2018/11/11/dsc-0662-5be71463677ffb580a496e07.jpg?t=o&v=350", about: "Lokasi : Desa Kinunang Timur, Kecamatan Likupang, Kabupaten Minahasa Utara, Sulawesi Utara." },
                { id: 2, name: "Bunaken", image: "https://cdn0-production-images-kly.akamaized.net/XvOBrhm59ErFklrWv_8imr9ua1M=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1521558/original/028704100_1488256531-6._Taman_Laut_Bunaken_-_Reservasi.jpg", about: "Lokasi : Teluk Manado, Sulawesi Utara" },
                { id: 3, name: "Danau Linow", image: "https://www.indonesiakaya.com/uploads/_images_gallery/12__Duduk_santai_dan_memandangi_keindahan_Danau_Linow_memberikan_nuansa_ketenangan_tersendiri.jpg", about: "Lokasi : Lahendong, Kecamatan Tomohon Selatan, Kota Tomohon, Sulawesi Utara." },
                { id: 4, name: "Gardena Country Inn", image: "https://pix10.agoda.net/hotelImages/729/729477/729477_14090913310021969043.jpg?s=1024x768", about: "Lokasi: Jl. Kawiley, Kakaskasen Dua, Tomohon Utara, Kota Tomohon, Sulawesi Utara." },
                { id: 5, name: "Gunung Payung", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETRe02gPYONWVC98LDj49wn3I4VhjxbAnTxzB3qyOWHCqeACrNQ&s", about: "Lokasi : Kecamatan Ranoyapo, Kabupaten Minahasa Utara, Sulawesi Utara." },
                { id: 6, name: "Hutan Pinus Lahendong", image: "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/15-2-by-christyangkouw-740x493.jpg", about: "Lokasi : Jalan Lahendong, Lahendong, Tomohon Selatan, Kota Tomohon, Sulawesi Utara." },
                { id: 7, name: "Rumah Alam Adventure Park Manado", image: "https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/24-3-by-ekatuna40@rumahalam.manado@vanesaechaa-740x740.jpg", about: "Lokasi :  Jalan Ring Road Manado II, Kairagi Satu, Mapanget, Kairagi Weru, Paal Dua, Kota Manado, Sulawesi Utara." }
            ]
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
                            <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.position}>{item.position}</Text>
                                    <TouchableOpacity style={styles.followButton} onPress={() => this.clickEventListener(item)}>
                                        <Text style={styles.followButtonText}>Details</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
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
        backgroundColor: "#eeeeee",
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
        width: 90,
        height: 90,
        borderRadius: 45,
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
        fontSize: 15,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    about: {
        marginHorizontal: 10
    },

    followButton: {
        marginHorizontal: 50,
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
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
        justifyContent: 'center',
    },
    txtClose: {
        marginTop: -10,
        color: 'white'
    }
}); 