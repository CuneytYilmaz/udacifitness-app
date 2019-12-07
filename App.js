import React, { Component } from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import CSSinJS from './components/CSSinJS'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends Component {
  render () {
    return (
      <Provider store={createStore(reducer)} >
        <View>
          <CSSinJS />
        </View>
      </Provider>
    );
  }
}