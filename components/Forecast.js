import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.main_text}>{props.main}</Text>
        <Text>{props.description}</Text>
        <View>
            <Text>{props.temp} <Text>°C</Text></Text>
        </View>
    </View >
    );
}
const styles = StyleSheet.create({
    main_text:{
        fontSize: 30,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        textAlignVertical: 'center'
    }

});