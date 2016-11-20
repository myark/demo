import React, { Component } from 'react';

import name from './test';

import {
    View,
    Text
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text>hello,{name}</Text>
            </View>
        )
    }
}

export default App;
