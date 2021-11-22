import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const SingleNewsPage = () => {
    return(
        <View style = {styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        height: 50,
        width: 50
    }
});

export default SingleNewsPage;