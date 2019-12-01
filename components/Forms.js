import React, { Component } from 'react'
import {
    StyleSheet,
    Switch,
    TextInput,
    KeyboardAvoidingView,
    Image,
    View
} from 'react-native'

export default class Forms extends Component {
    state={
        input: '@cuneytyilmazz',
        showInput: false,
    }

    handleToggleSwitch = () => {
        this.setState((state) => ({
            showInput: !state.showInput
        }))
    }

    handleTextChange = (input) => {
        this.setState(() => ({
            input
        }))
    }

    render () {
        const { input, showInput } = this.state

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container} >
                <Image 
                    source={{uri: 'https://www.cuneytyilmaz.dev/static/media/profile.9c9bcaff.jpg'}}
                    style={styles.img}
                />

                <Switch 
                    value={showInput}
                    onValueChange={this.handleToggleSwitch}
                />

                {showInput === true && (
                    <TextInput
                        value={input}
                        style={styles.input}
                        onChangeText={this.handleTextChange}
                    />
                )}
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 200,
    },
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,
    },
    img: {
        width: 100,
        height: 100,
        margin: 50,
    }
})