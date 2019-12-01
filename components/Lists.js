import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList
} from 'react-native'
import getReviews from '../utils/reviews'

function Review({ name, text, avatar }) {
    return(
        <View style={styles.review}>
            <Image source={{uri: avatar}} style={styles.avatar} />
            <View style={{flex: 1, flexWrap: 'wrap'}} >
                <Text style={{fontSize: 20}}>{name}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    )
}

export default class Lists extends Component {
    renderItem = ({ item }) => {
        return <Review {...item} />
    }

    render () {
        const reviews = getReviews()

        return (
            // <ScrollView style={styles.container} >
            //     {reviews.map(({ name, text, avatar }) => <Review key={name} name={name} text={text} avatar={avatar} />)}
            // </ScrollView>

            <View style={styles.container}>
                <FlatList  
                    data={reviews}
                    renderItem={this.renderItem}
                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    review: {
        margin: 10,
        flexDirection: 'row',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    }
})