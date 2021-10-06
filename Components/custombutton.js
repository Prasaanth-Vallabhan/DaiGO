import React from 'react'
import { Text, View, StyleSheet } from 'react-native'



const Custombutton = () => {
    return(
        <View style = { styles.button }>
            <Text style = 
            {{ fontSize: 24, color: 'white', fontWeight: 'bold' }}
            >Get Started
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D303FC',
        marginTop: 225,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 119,
        paddingVertical: 9,
        borderRadius: 30,
        marginBottom: 67

    }
})


export default Custombutton;