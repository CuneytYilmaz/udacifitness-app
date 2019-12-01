import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider ({ value, max, unit, step, onChange }) {
    return (
        <View>
            <Slider 
                maximumValue={max}
                minimumValue={0}
                step={step}
                value={value}
                onValueChange={onChange}
            />
            <Text>{value}</Text>
            <Text>{unit}</Text>
        </View>
    )
}