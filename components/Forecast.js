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
            <View style={styles.details}>
                <Text style={styles.headerText}>Wind</Text>
                <Text style={styles.detailText}>Wind Speed {props.wind_speed} meter/sec</Text>
                <Text style={styles.detailText}>Wind Direction {props.wind_deg}°</Text>
                <Text style={styles.headerText}>Humidity & Pressure</Text>
                <Text style={styles.detailText}>Humidity {props.humidity}%</Text>
                <Text style={styles.detailText}>Pressure {props.pressure} hPa</Text>
                <Text style={styles.headerText}>Lowest & Highest Temperature</Text>
                <Text style={styles.detailText}>Lowest Temperature {props.temp_min}°C</Text>
                <Text style={styles.detailText}>Highest Temperature {props.temp_max}°C</Text>
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
        color: 'white',
        fontSize: 30,
        paddingBottom: 15,
    },

    descriptionText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    
    tempText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },

    details:{        
        alignItems: 'center',
    },
    
    detailText:{        
        color: 'white',
    },

    headerText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 12,
        paddingTop: 12,
    },
});