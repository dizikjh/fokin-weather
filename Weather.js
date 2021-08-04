import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";//stylesheet 만들기
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { stopLocationUpdatesAsync } from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions ={
    Haze: {
        iconName:"weather-hazy",
        gradient:["#659999","#f4791f"],
        title: "Haze",
        subtitle: "Just don't go out side"
    },
    Thunderstorm : {
        iconName:"weather-lightning",
        gradient: ["#00c3ff","#ffff1c"],
        title: "Thunderstorm",
        subtitle: "Thunderstorm_wow"
    },
    Drizzle : {
        iconName:"weather-partly-snowy-rainy",
        gradient: ["#c31432","#240b36"],
        title: "Drizzle",
        subtitle: "Dizzle_wow"
    },
    Rain : {
        iconName:"weather-pouring",
        gradient: ["#f4c4f3","#fc67fa"],
        title: "Rain",
        subtitle: "Prepare a umbrella"
    },
    Snow : {
        iconName:"weather-snowy",
        gradient: ["#3494E6","#EC6EAD"],
        title: "Snow",
        subtitle: "You can do snow fight"
    },
    Atmosphere : {
        iconName:"weather-tornado",
        gradient: ["#DBE6F6","#C5796D"],
        title: "Atmosphere",
        subtitle: "I don't have Idea"
    },
    Clear : {
        iconName:"weather-sunny",
        gradient: ["#9CECFB","#65C7F7"],
        title: "Clear",
        subtitle: "Sunny day A"
    },
    Clouds : {
        iconName:"apple-icloud",
        gradient: ["#c0c0aa","#1cefff"],
        title: "Clouds",
        subtitle: "cloud not beer"
    },
    Mist : {
        iconName:"weather-fog",
        gradient: ["#DCE35B","#45B649"],
        title: "Mist",
        subtitle: "Be careful to drive"
    },
    Dust : {
        iconName:"weather-smog",
        gradient: ["#E8CBC0","#636FA4"],
        title: "Dust",
        subtitle: "Watch out your eyesight"
    }
 }

export default function Weather({temp, condition}){ //stateless 컴포넌트가 된다.
    //export default 때문에 return을 해야 한다.
    return (
        <LinearGradient
        // Button Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/> 
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name = {weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>    
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>    
        </LinearGradient>
    );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired //condition props가 required로 명시 되어 있기 때문에
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp: {
        fontSize: 42,
        color:"white"
    },
    halfContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight: "600",
        color:"white",
        fontSize:24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start" //왼쪽 정렬
    }
});