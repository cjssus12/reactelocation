import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView} from 'expo';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (postion)=>{
        const{coords} = postion;
        this.setState({
          latitude: coords.latitude,
          longitude : coords.longitude
        });
      },
      (error)=>{alert(error.message)},
      {
        enableHighAccuracy:true,
        timeout:10000,
        maximumAge:1000
      }
    );
  }
  render() {
    return (
      <View style={styles.bd}>
      {this.state.latitude ?
        <MapView style={styles.mapbd} 
        initialRegion ={{
          latitude:this.state.latitude,
          longitude:this.state.longitude,
          latitudeDelta:0.0922,
          longitudeDelta:0.0421,
        }}
        />
        : <Text> 위치를 읽어오는 중... </Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bd: {
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    //borderColor: 'red',
    //borderWidth: 3

  },

  mapbd: {
    flex:1,
  }

});
