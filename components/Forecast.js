import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';


export default function Forecast(props) {
    console.log(props.icon)
    let icon = props.icon
    const iconurl = 'http://openweathermap.org/img/wn/' + props.icon + '@4x.png'
    return (
        <View >
            <Text style={styles.mainText}>{props.name}, {props.country}</Text>
            <View style={styles.temp}>
                <Text style={styles.tempText}>{props.temp}°C</Text>
            </View>
            <View style={styles.description}>
                <Image style={{ width: 64, height: 64 }} source={{ uri: iconurl }} />
                <Text style={styles.descriptionText}>{props.description}</Text>
            </View>
            <View style={styles.section}></View>
            <View style={styles.details}>
                <Text >Wind Speed {props.wind_speed} meter/sec</Text>
                <Text >Wind direction {props.wind_deg}°</Text>
                <Text >humidity {props.humidity}%</Text>
                <Text >temp_min {props.temp_min}°C</Text>
                <Text >temp_max {props.temp_max}°C</Text>
                <Text >pressure {props.pressure} hPa</Text>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    temp: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    description:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainText: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        fontSize: 30,
        paddingBottom: 15,
    },

    descriptionText: {
        fontSize: 20,
        textAlign: 'center',
    },
    
    tempText: {
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },

    section: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    details:{        

},
});