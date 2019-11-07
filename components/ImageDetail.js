import React from 'react'
import { Text, Image, View } from 'react-native'

const ImageDetail = ({ imageSource, title, rating }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text> {title} </Text>
            <Text> Rating: {rating} stars </Text>
        </View>
    )
};

export default ImageDetail;