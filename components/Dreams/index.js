//import liraries
import React, { Component} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import styles from './styles';
import Search from 'react-native-search-box';
import AtoZListView from 'react-native-atoz-listview';
import { dataApp } from '../data/data'

const rowHeight = 40;
// create a component
class Dreams extends Component {
    constructor(props) {
        super(props);
        this.state = {data: dataApp};
        this.loaded = false;
    }
    
    _onChangeText = (text) => {
        if(!this.loaded) return;
        this.setState(previousState => {
            let newData = dataApp.filter(item => item.text.includes(text));
            return {data: newData};
        });
    }
    _resetData = () => {
        this.setState(previousState => {
            return {data: dataApp};
        });
    }
    componentDidMount = () => {
        this.loaded = true
    }
    renderRow = (item, sectionId, index) => {
        return (
            <TouchableHighlight
                style={styles.renderItem}
            >
                <View style={styles.rowitem}>
                    <Text style={styles.textTitle}>{item.text}</Text>
                    <Text style={styles.textDetail}>{item.number}</Text>
                    <View style={styles.rowHorizontal}></View>
                </View>
            </TouchableHighlight>
        );
    }
    beforeFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus');
            resolve();
        });
    }

    // Important: You must return a Promise
    onFocus = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onFocus', text);
            resolve();
        });
    }

    // Important: You must return a Promise
    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
            resolve();
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.findContainer}>
                    <Search
                        ref="search_box"
                        placeholder='Tìm kiếm'
                        backgroundColor='#e0e0e0'
                        titleCancelColor='#2979ff'
                        onChangeText={this._onChangeText}
                        afterDelete={this._resetData}
                        afterCancel={this._resetData}
                        enableEmptySections={true}
                        /**
                         * There many props that can customizable
                         * Please scroll down to Props section
                         */
                        />
                </View>
                
                <View style={styles.contentContainer}>
                    <AtoZListView
                        data={this.state.data}
                        renderRow={this.renderRow}
                        rowHeight={rowHeight}
                        sectionHeaderHeight={rowHeight}
                        style={styles.gridView}
                    />
                </View>
            </View>
        );
    }
}

//make this component available to the app
export default Dreams;
