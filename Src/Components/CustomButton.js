import React from 'react'
import { Text, View, StyleSheet } from 'react-native'



const CustomButton = () => {
    return(
        <View style = { styles.button }>
            <Text style = 
            {{ fontSize: 20, color: 'white', fontWeight: 'bold' }}
            >Get Started
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D303FC',
        alignItems: 'center',
        marginHorizontal: 110,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        alignSelf: 'flex-end',
        marginTop: '75%'
        

    }
})


export default CustomButton;