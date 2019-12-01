import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    View
} from 'react-native'

export default class ImageDemo extends Component {
    render () {
        return (
            <View style={styles.container} >
                {/* <Image style={styles.Image} source={require('./cuneytyilmaz.png')} /> */}
                <View style={{margin: 200}} />
                <Image style={styles.img} source={{uri: 'https://www.cuneytyilmaz.dev/static/media/profile.9c9bcaff.jpg'}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})