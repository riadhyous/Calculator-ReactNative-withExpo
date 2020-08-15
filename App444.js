import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button ,TextInput ,ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'mediumaquamarine',
   paddingTop: 10,
   textAlign: "center",
   alignItems: 'center',
   justifyContent: 'center',

  },
  button: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10
  },
  label: {
    margin:10,
    padding:10
  },
  text:{
    marginRight: 10,
    height: 40,
    padding: 2,
    margin:5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center"
  },
  info : {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    paddingBottom:15,
    paddingTop:15,
    marginTop:15
  }
  
});
const API_KEY = "80ddbb0bdef3ee7caaf9ad29713713f8"
class App extends Component {
  state = {
    tepreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'',
    cityText : '',
    countryText : ''
  }
  
  getWeather = async () => {
    const city = this.state.cityText;
    const country = this.state.countryText;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json()

    if(city && country && data.main){
      this.setState({
      tepreature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
      })
    }
    else{
      this.setState({
    tepreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'Please Enter Data or Your Data Incorrect'
      })
    }
    }
  render(){
    return (
      
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
         
      <TextInput
        style={styles.text}
        placeholder="City..."
        onChangeText={text => this.setState({cityText : text})}
        defaultValue={this.state.city}
      />
      <TextInput
        style={styles.text}
        placeholder="Country..."
        onChangeText={text => this.setState({countryText : text})}
        defaultValue={this.state.country}
      />
      <Button
      style={styles.button}
        title="Get Weather"
        color="#f194ff"
        onPress={this.getWeather}
      />
      <Text style={styles.info}>
        <Text style={{
          marginTop:15,
          fontSize: 15,
          fontWeight: "bold"
    }}>Result:</Text>
                {
                    this.state.tepreature && <Text style={styles.label}>{"\n"}Tepreature: <Text  >{this.state.tepreature}</Text>  </Text>
                }
                {
                    this.state.city && <Text >{"\n"}City: <Text >{this.state.city}</Text> </Text>
                }
                {
                    this.state.country && <Text >{"\n"}Country: <Text >{this.state.country}</Text> </Text>
                }
                {
                    this.state.humidity && <Text >{"\n"}Humidity:  <Text >{this.state.humidity}</Text></Text>
                }
                {
                    this.state.description && <Text >{"\n"}Description: <Text >{this.state.description}</Text>  </Text>
                }
                {
                    this.state.error && <Text >{"\n"}Error:  <Text >{this.state.error}</Text> </Text>
                }
            </Text>
      
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
    );
  }
}

export default App;