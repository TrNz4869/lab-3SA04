import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=ba71be1f648c0f1670bfeba150347064`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        feels_like: json.main.feels_like,
                        country: json.sys.country,
                        icon: json.weather[0].icon,
                        wind_speed: json.wind.speed,
                        wind_deg: json.wind.deg,
                        humidity: json.main.humidity,
                        temp_min: json.main.temp_min,
                        temp_max: json.main.temp_max,
                        pressure: json.main.pressure,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        feels_like: 0,
        visibility: 0,
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.box}>
                    <Text style={styles.zip_code_text}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    box: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%',
        height: '100%',
    },

    zip_code_text: {
        paddingTop: 20,
    },

});