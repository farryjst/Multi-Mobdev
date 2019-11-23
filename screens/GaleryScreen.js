import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';

export default class Galery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, likes: "12K", image: "https://rentalcarmanado.com/wp-content/uploads/2018/12/Manado-Senja.jpg" },
                { id: 2, likes: "11K", image: "https://allesgroen.files.wordpress.com/2017/05/pulau-manado-tua.jpg" },
                { id: 3, likes: "29K", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibnVbaUcYzmPWIb1iuFuUjR3dyjWBg4E-ecxthAUwGt15Wx8Q&s" },
                { id: 4, likes: "33K", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwyrVGCCp9FiACB5yvuGx5pzFeHoxHaS3_h09eAbunpHJNCs_Zg&s" },
                { id: 5, likes: "10K", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqviDiwOtUUn2_xzGTlsuXpA9La_YNBPCjfx6CdLsuVRGcVdmrg&s" }
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator} />
                        )
                    }}
                    renderItem={(post) => {
                        const item = post.item;
                        return (
                            <View style={styles.card}>
                                <Image style={styles.cardImage} source={{ uri: item.image }} />
                                <View style={styles.cardFooter}>
                                    <View style={styles.socialBarContainer}>
                                        <View style={styles.socialBarSection}>
                                        </View>
                                        <View style={styles.socialBarSection}>
                                            <TouchableOpacity style={styles.socialBarButton}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/color/50/000000/hearts.png' }} />
                                                <Text style={styles.socialBarLabel}>{item.likes}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee"
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#A3CFE9",
    },
    listContainer: {
        alignItems: 'center'
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        marginVertical: 8,
        flexBasis: '47%',
        marginHorizontal: 5,
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        flex: 1,
        height: 150,
        marginTop: 20,
        width: null,
    },
    /******** card components **************/
    share: {
        color: "#25b7d3",
    },
    icon: {
        width: 25,
        height: 25,
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});  