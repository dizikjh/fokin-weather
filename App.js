import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import {
  Alert
} from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "0a59c1126f4b9d1c35756a72235d4ee5";

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//for test
export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    })
  }
  getLocation = async () => {
    try {
      // lon, lat 값 확인 
      // await Location.requestForegroundPermissionsAsync();
      // const location = await Location.getCurrentPositionAsync(); //await function = wait for it
      // console.log(location);

      // throw Error(); //에러 테스트
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {
          latitude,
          longitude
        }
      } = await Location.getCurrentPositionAsync(); //await function = wait for it
      this.getWeather(latitude, longitude)
      //this.setState({ isLoading: false}); //state 동작 테스트 -> 위로 이동
      //Send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you", "So sad")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {
      isLoading,
      temp,
      condition
    } = this.state;
    return isLoading ? < Loading / > : < Weather temp = {
      Math.round(temp)
    }
    condition = {
      condition
    }
    /> ;
  }
}
/*
export default function App() {
  return <Loading />;
}
*/