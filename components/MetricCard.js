import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { gray } from '../utils/colors'
import { getMetricMetaInfo } from '../utils/helpers'
import DateHeader from './DateHeader'

export default function MetricCard ({ date, metrics }) {
    return (
        <View>
            {date && <DateHeader date={date} />}
            {Object.keys(metrics).map((metric) => {
                const { displayName, unit, getIcon } = getMetricMetaInfo(metric)

                return (
                    <View style={styles.metric} key={metric}>
                        {getIcon()}
                        <View>
                            <Text style={{ fontSize: 20 }}>
                                {displayName}
                            </Text>
                            <Text style={{ fontSize: 16, color: gray }}>
                                {metrics[metric]} {unit}
                            </Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    metric: {
        flexDirection: 'row',
        marginTop: 12,
    }
})