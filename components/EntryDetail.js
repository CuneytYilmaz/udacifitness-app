import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import MetricCard from './MetricCard'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import { addEntry } from '../actions'
import { removeEntry } from '../utils/api'
import { timeToString, getDailyReminderValue } from '../utils/helpers'

class EntryDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { entryId } = navigation.state.params

        const year = entryId.slice(0,4)
        const month = entryId.slice(5,7)
        const day = entryId.slice(8)

        return {
            title: `${day}/${month}/${year}`
        }
    }

    reset = () => {
        const { remove, goBack, entryId } = this.props

        remove(entryId)
        goBack()
        removeEntry(entryId)
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.metrics !== null && !nextProps.metrics.today
    }

    render () {
        const { metrics } = this.props

        return (
            <View style={styles.container} >
                <MetricCard metrics={metrics} />
                <TextButton style={{ margin: 20 }} onPress={this.reset} >
                    RESET
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15,
    }
})

function mapDispatchToProps (dispatch, { navigation }) {
    const { entryId } = navigation.state.params

    return {
        remove: () => dispatch(addEntry({
            [entryId] : entryId === timeToString
                ? getDailyReminderValue()
                : null
        })),
        goBack: () => navigation.goBack(),
    }
}

function mapStateToProps (state, { navigation }) {
    const { entryId } = navigation.state.params

    return {
        entryId,
        metrics: state[entryId],
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)