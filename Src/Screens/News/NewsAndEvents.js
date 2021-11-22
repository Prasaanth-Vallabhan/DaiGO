import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import NewsCard from "../../Components/NewsCard";
import useResults from "../../Hooks/useResults";

const NewsAndEvents = ({navigation}) => {

    let userName = 'Ansh';
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const d = new Date();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    var date = d.getDate();
    var hours = d.getHours();
    var mins = d.getMinutes();
    

    const [results] = useResults();

    return(
        <View style = { styles.container }>
            <View style = {{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 5 }}>
                <Text style = {styles.header}>Welcome</Text>
                <Text style = {styles.name}>{userName}</Text>
            </View>
            <View style = {{ flexDirection: 'row', alignSelf: 'flex-start', marginBottom: 25, marginLeft: 7  }}>
                <Text style = {styles.dateAndTime} >{hours}</Text>
                <Text 
                    style = {{ 
                        fontSize: 17, 
                        color: 'white', 
                        fontWeight: 'bold',
                        marginLeft: 15 }} >:</Text>
                <Text style = {styles.dateAndTime} >{mins}</Text>
                <Text 
                    style = {{ 
                        fontSize: 17, 
                        color: 'white', 
                        fontWeight: 'bold',
                        marginLeft: 15 }} >|</Text>
                <Text style = {styles.dateAndTime} >{date} {month} {year}</Text>
            </View>
            
            <FlatList
                data = {results}
                keyExtractor = {(item) => item.url }
                renderItem = { ({item}) => (
                    <NewsCard 
                        image = {item.urlToImage}
                        headline = {item.title} 
                    />
                )}/>
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
    },
    header: {
        color: '#D303FC',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '4%'
    },
    name: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '4%'
    },
    dateAndTime: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '4%'
    }
});

export default NewsAndEvents;