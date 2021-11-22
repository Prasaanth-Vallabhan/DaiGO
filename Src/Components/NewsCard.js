import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';


const NewsCard = ({image, headline}) => {

    return(
        <View>
            <Image style = {styles.imageSize} source = {{uri: `${image}`}} />
            <Text style = {styles.newsHeadline}>{headline}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageSize: {
        height: 260,
        width: '90%',
        borderRadius: 20,
        alignSelf: 'center'
    },
    newsHeadline: {
        color: 'white',
        marginHorizontal: 15,
        marginTop: '5%',
        marginBottom: '10%',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default NewsCard;