import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

export default function UdaciSlider ({ value, max, unit, step, onChange }) {
    return (
        <View style={styles.row}>
            <Slider 
                style={{flex: 1}}
                maximumValue={max}
                minimumValue={0}
                step={step}
                value={value}
                onValueChange={onChange}
            />
            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    }
})