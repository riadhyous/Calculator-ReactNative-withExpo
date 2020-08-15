import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button ,TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
   backgroundColor: 'mediumaquamarine',
   paddingTop: 10,
   textAlign: "center",
  },
  item: {
    padding: 6,
    height: 25,
  },
  text:{
    marginRight: 10,
    height: 40,
    padding: 2,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center"
  }
});

class FlatListBasics extends Component {
  state = {
    data : [
      {key: 'Riad'},
      {key: 'Dan'},
      {key: 'Dominic'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ],
    text : ''
  }
  clicked = () =>{
    this.setState({ data: [...this.state.data, {key: this.state.text}] })
  }
  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <TextInput
        style={styles.text}
        placeholder="Add name !"
        onChangeText={text => this.setState({text : text})}
        defaultValue={this.state.text}
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={this.clicked}
      />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default FlatListBasics;