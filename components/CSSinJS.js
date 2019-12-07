import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class CSSinJS extends Component {
    render () {
        return(
            <View style={styles.container} >
                <Text style={{color: 'red'}} >
                    Hello!
                </Text>
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
    }
})