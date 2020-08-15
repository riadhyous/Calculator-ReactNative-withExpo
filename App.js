import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button ,TextInput ,ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#e7F2FF',
   textAlign: "center",
   alignItems: 'center',
   justifyContent: 'center',
   alignContent:'center'
  },
  text: {
    alignItems:"center",
    justifyContent:"center",
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius:5,
      width:"85%",
      height:"15%",
      marginBottom:5,
      
      padding:20


},
button : {
  backgroundColor:'#008Bdd',
  margin:5,
  height:"100%",
  width:"20%",
  textAlign: "center",
   alignItems: 'center',
   justifyContent: 'center',
   alignContent:'center'
},
content:{
  alignItems:"center",
  justifyContent:"center",
  width:'95%',
  height:"45%",
  marginTop:"5%",
},
childcontent:{
  margin:5,
  
  flexDirection: 'row',
  width:'100%',
  height:'25%',
  justifyContent: 'center',
  alignContent:'center',
  textAlign: "center",
  alignItems: 'center'
},
textButton:{
  fontSize:45,
  color:"#ffffff",
  marginLeft:"2%"
},
textStyle:{
  fontSize:50,
  fontWeight:"bold",
  width:"100%",
  height:"100%"
  
}

  
});

class App extends Component {
  state = {
    test:false,
    testOperation:false,
    testBracket:0,
    testVergule:true,
    value2:'',
    uniqueValue: ''
  }
  clickedfffff = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState({value:'2'})
  }
  clicked1 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '1'
    }));
  }
  clicked2 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '2'
    }));
  }
  clicked3 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '3'
    }));
  }
  clicked4 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '4'
    }));
  }
  clicked5 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '5'
    }));
  }
  clicked6 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '6'
    }));
  }
  clicked7 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '7'
    }));
  }
  clicked8 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '8'
    }));
  }
  clicked9 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '9'
    }));
  }
  clicked0 = () => {
    if(this.state.test == true){
      this.clickedC()
    }
    this.setState(({ uniqueValue }) => ({
      testOperation:true,
      uniqueValue: uniqueValue + '0'
    }));
  }
  clickedplus = () => {
    if(this.state.testOperation == true){
    this.setState(({ uniqueValue }) => ({
      testOperation:false,
      testVergule : true,
      uniqueValue: uniqueValue + '+'
    }));
  }
  }
  clickedmin = () => {
    if(this.state.testOperation == true){
      this.setState(({ uniqueValue }) => ({
        testOperation:false,
        testVergule : true,
        uniqueValue: uniqueValue + '-'
      }));
    }
  }
  clickedmult = () => {
    if(this.state.testOperation == true){
      this.setState(({ uniqueValue }) => ({
        testOperation:false,
        testVergule : true,
        uniqueValue: uniqueValue + '*'
      }));
    }
  }
  clickeddiv = () => {
    if(this.state.testOperation == true){
      this.setState(({ uniqueValue }) => ({
        testOperation:false,
        testVergule : true,
        uniqueValue: uniqueValue + '/'
      }));
    }
  }
  clickedver = () => {
    if(this.state.testOperation == true && this.state.testVergule == true){
      this.setState(({ uniqueValue }) => ({
        testOperation:false,
        testVergule : false,
        uniqueValue: uniqueValue + '.'
      }));
    }
  }
  clickedBraOpen = () => {
    if(this.state.testOperation != true || this.state.uniqueValue.length == 0){
      this.setState(({ uniqueValue,testBracket }) => ({
        testOperation:false,
        testBracket:testBracket + 1,
        uniqueValue: uniqueValue + '('
      }));
    }
  }
  clickedBraFerm = () => {
    if(this.state.testBracket != 0 && this.state.testOperation == true){
      this.setState(({ uniqueValue ,testBracket }) => ({
        testBracket:testBracket - 1,
        testOperation:true,
        uniqueValue: uniqueValue + ')'
      }));
    }
  }
  clickedequal = () => {
    if(this.state.testOperation == true){
    this.setState(({ test }) => ({
      test: true
    }));
    const result = eval(this.state.uniqueValue)
    this.setState(({ uniqueValue }) => ({
      uniqueValue: ' ' + result
    }));
  }}
  clickedC = () => {
    this.setState(({ test }) => ({
      test: false
    }));
    this.setState(() => ({
      uniqueValue : ''
    }));
  }
  clickedDel = () => {
    var str =this.state.uniqueValue;
    if((str[this.state.uniqueValue.length - 1] == "+") || str[this.state.uniqueValue.length - 1] == "-" || str[this.state.uniqueValue.length - 1] == "/" || str[this.state.uniqueValue.length - 1] == "*"){
    this.setState(({ testOperation }) => ({
      testOperation: !testOperation
    }));}
    this.setState(({ uniqueValue }) => ({
      uniqueValue : uniqueValue.substring(0,uniqueValue.length - 1)
    }));
  }
  render(){
    return (
      
      <View style={styles.container}>
      <View style={styles.text}>
            <Text style={styles.textStyle}>{this.state.uniqueValue.length > 25 ? 
              "..." + this.state.uniqueValue.substr(-15)
            :
            this.state.uniqueValue}
          </Text>
      </View>
      <View style={styles.content}>
      <TouchableOpacity style={styles.childcontent}>
       <TouchableOpacity style={styles.button} onPress={this.clicked1}  >
          <Text style={styles.textButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked2} >
        <Text style={styles.textButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked3} >
        <Text style={styles.textButton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#008000'}]} onPress={this.clickedplus} >
        <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.childcontent}>
       <TouchableOpacity style={styles.button} onPress={this.clicked4} >
       <Text style={styles.textButton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked5} >
        <Text style={styles.textButton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked6} >
        <Text style={styles.textButton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#008000'}]} onPress={this.clickedmin} >
        <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View><View style={styles.childcontent}>
       <TouchableOpacity style={styles.button} onPress={this.clicked7} >
       <Text style={styles.textButton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked8} >
        <Text style={styles.textButton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked9} >
        <Text style={styles.textButton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#008000'}]} onPress={this.clickedmult} >
        <Text style={styles.textButton}>*</Text>
        </TouchableOpacity>
      </View><View style={styles.childcontent}>
       <TouchableOpacity style={[styles.button,{backgroundColor:'#2F4F4F'}]} onPress={this.clickedBraOpen} >
       <Text style={[styles.textButton,{marginBottom:12}]}>{'('}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clicked0} >
        <Text style={styles.textButton}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#2F4F4F'}]} onPress={this.clickedBraFerm} >
        <Text style={[styles.textButton,{marginBottom:12}]}>{')'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#008000'}]} onPress={this.clickeddiv} >
        <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.childcontent}>
       <TouchableOpacity style={[styles.button,{backgroundColor:'#b22222'}]} onPress={this.clickedC} >
       <Text style={styles.textButton}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#2F4F4F'}]} onPress={this.clickedver} >
        <Text style={styles.textButton}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#ff8c00'}]} onPress={this.clickedDel} >
        <Text style={[styles.textButton,{fontSize:30}]}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#0011aa'}]} onPress={this.clickedequal} >
        <Text style={styles.textButton}>=</Text>
        </TouchableOpacity>
        </View>
        <View key={this.state.uniqueValue}>
        
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
    );
  }
}

export default App;
