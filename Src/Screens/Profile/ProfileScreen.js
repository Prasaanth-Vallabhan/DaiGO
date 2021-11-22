import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return(
        <View style = { styles.container }>
            <Text style = {{ 
                color: 'white' }}
            >Profile Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProfileScreen;