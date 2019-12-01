import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback
} from 'react-native'

export default class Touchables extends Component {
    handlePress = () => {
        
    }

    render () {
        return(
            <View style={styles.container} >
                <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#D4271B' >
                    <Text style={styles.btnText}>TouchableHighlight</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
                <Text style={styles.btnText}>TouchableOpacity</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this.handlePress}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableNativeFeedback 
                    onPress={this.handlePress}
                    background={TouchableNativeFeedback.SelectableBackground()}    
                >
                <View style={styles.btn}>
                        <Text style={styles.btnText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
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
    btn: {
        backgroundColor: '#E53224',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 5,
    },
    btnText: {
        color: '#fff'
    }
})