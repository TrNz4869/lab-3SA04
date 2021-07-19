import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Bangkok', code: '10110' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Hatyai', code: '90110' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Nakhon Ratchasima', code: '30000' },
    { place: 'Phayao', code: '56000' },
    { place: 'Samut Prakan', code: '10270' },
    { place: 'Trang', code: '92000' },
    { place: 'Yala', code: '95000' },
]
const ZipItem = ({ place, code, navigation}) => (
    <TouchableHighlight onPress={() =>{
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.ZipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code


export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <>
        <View style={styles.chooseHeader}>
            <Text style={styles.chooseText}>Choose a city and zip code</Text>
        </View>
        <View style={styles.header}>
            <Text style={styles.headerText}>City</Text>
            <Text style={styles.headerText}>Zip code</Text>
        </View>
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
        
        </>
    );
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },

    zipPlace: {
        flex: 1,
    },

    zipCode: {
        flex: 1,
    },
    
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    }, 

    chooseHeader: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },
    
    chooseText: {
        alignItems: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    }
})

