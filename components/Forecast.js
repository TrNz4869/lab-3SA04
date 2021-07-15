import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.main_text}>{props.main}</Text>
        <Text style={styles.description_text}>{props.description}</Text>
        <View style={styles.temp}>
            <Text style={styles.temp_text}>{props.temp}</Text>
            <Text style={styles.cel_text}>°C</Text>
        </View>
    </View >
    );
}
const styles = StyleSheet.create({
    main_text:{
        width: '100%',
        alignItems: 'center',
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