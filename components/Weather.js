import React, {useState} from 'react';
import {ImageBackground, Text, View, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
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
    
    box:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        width: '100%',
    },

    zip_code_text:{
        padding: 20,
    },

});