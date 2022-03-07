import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import db from '../Solar Planets Prtc/final_stars';

export default class Details extends Component{
    state = {
        name : this.props.navigation.getParam("planet_name"),
        distance : '',
        mass : '',
        radius : '',
        gravity : '',
        image : null,
    }

    componentDidMount = () => {
        for(var i in db){
            if(this.state.name === db[i].name){
                this.setState({
                    distance : db[i].distance,
                    mass : db[i].mass,
                    radius : db[i].radius,
                    gravity : db[i].gravity,
                    image : db[i].image,
                })
            }
        }
    }
    
    render(){
            return(
                <ScrollView>
                <View style = {{
                    backgroundColor : '#393E46',
                    height : '100%',
                }}>
                    <Text style = {{
                        fontSize : 40,
                        color : '#00ADB5',
                        textAlign : 'center',
                        fontFamily : 'bradley hand',
                        marginTop : 30
                    }}> Name of the planet : {this.state.name} </Text>
                    
                   <Text style = {{
                       fontSize : 30,
                       color : '#00ADB5',
                       textAlign : 'center',
                       fontFamily : 'bradley hand'
                   }}> Mass of the planet : {this.state.mass} </Text>
                   <Text style = {{
                       fontSize : 30,
                       color : '#00ADB5',
                       textAlign : 'center',
                       fontFamily : 'bradley hand'
                   }}> Distance of the planet : {this.state.distance} </Text>
                   <Text style = {{
                       fontSize : 30,
                       color : '#00ADB5',
                       textAlign : 'center',
                       fontFamily : 'bradley hand'
                   }}> Radius of the planet : {this.state.radius} </Text>
                   <Text style = {{
                       fontSize : 30,
                       color : '#00ADB5',
                       textAlign : 'center',
                       fontFamily : 'bradley hand'
                   }}> Gravity of the planet : {this.state.gravity} </Text>
                </View>
                </ScrollView>
            )
        }
}