import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';

export default function Forecast(props) {
    console.log(props.icon)
    let icon = props.icon
    const iconurl = 'http://openweathermap.org/img/wn/'+props.icon+'@4x.png'
    return (
    <View >
        <Text style={styles.main_text}>{props.name}, {props.country}</Text>
        <View style={styles.temp}>
            <Image style={{width: 45, height:45, }} source={{uri:iconurl}}/>
            <Text style={styles.temp_text}>{props.temp} °C</Text>
        </View>
        <Text style={styles.main_text}>{props.description}</Text>
        <View style={styles.temp}>
            <Text style={styles.temp_text}>Feels like {props.feels_like} °C</Text>
        </View>
        <Text >Wind Speed {props.wind_speed} meter/sec</Text>
        <Text >Wind direction {props.wind_deg}°</Text>
        <Text >humidity {props.humidity} %</Text>
        <Text >temp_min {props.temp_min} </Text>
        <Text >temp_max {props.temp_max} </Text>
        <Text >temp_max {props.visibility} </Text>
    </View >
    );
}
const styles = StyleSheet.create({
    main_text:{
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        fontSize: 30,
        paddingBottom: 30,
    },
    description_text:{
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 30,
    },
    temp:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    temp_text:{
        fontSize: 30,
    },
    cel_text:{
        textAlignVertical: 'center'
    },

});