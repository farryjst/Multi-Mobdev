import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

const students = [
    { name: 'Bumi', imageUrl: 'https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png' },
    { name: 'Matahari', imageUrl: 'https://www.pinclipart.com/picdir/big/86-861633_big-image-gambar-matahari-dan-bintang-clipart.png' },
    { name: 'Bulan', imageUrl: 'https://pngimage.net/wp-content/uploads/2018/06/gambar-bulan-png-1.png' },
    { name: 'Venus', imageUrl: 'https://i.dlpng.com/static/png/5181413-venus-png-download-512512-free-transparent-venus-png-download-planet-venus-png-900_520_preview.png' }
];

const StudentScreen = () => {
    return (
        <FlatList
            data={students}
            renderItem={({ item }) =>
                <View style={styles.textStyle}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: item.imageUrl }}
                    />
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.fakultas}
                    </Text>
                </View>
            }

            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100,
        alignItems: 'center'
    }
});

export default StudentScreen;