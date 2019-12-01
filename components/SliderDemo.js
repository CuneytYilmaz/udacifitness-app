import React, { Component } from 'react'
import { View, Slider, Text } from 'react-native'

export default class SliderDemo extends Component {
    state={
        value: 0,
    }

    render () {
        return (
            <View>
                <Slider 
                    value={this.state.value}
                    minimumValue={-10}
                    maximumValue={10}
                    step={1}
                    onValueChange={ (value) => { this.setState({value})} }
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        )
    }
}