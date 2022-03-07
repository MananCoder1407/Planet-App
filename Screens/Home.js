import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component{
    render(){
        return(
            <View style = {{
                backgroundColor : '#393E46',
                height : '100%',
            }}>
                <Card containerStyle = {{
                    backgroundColor : '#00ADB5',
                    borderRadius : 20,
                    marginTop : 30,
                }}>
                    <Card.Title style = {{
                        fontFamily : 'bradley hand', 
                        color : '#222831',
                        fontSize : 40
                    }}> Sirius </Card.Title>
                    <Image source = {require('../assets/sirius.png')} style = {{
                        alignSelf : 'center',
                        marginTop : 10,
                        marginBottom : 10,
                        width : 450,
                        height : 350,
                        borderRadius : 20,
                    }}></Image>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Details', {planet_name : 'Sirius'});
                    }}>
                        <Text style = {style.button}> View Details </Text>
                    </TouchableOpacity>
                </Card>


                <Card containerStyle = {{
                    backgroundColor : '#00ADB5',
                    borderRadius : 20,
                    marginTop : 30,
                }}>
                    <Card.Title style = {{
                        fontFamily : 'bradley hand', 
                        color : '#222831',
                        fontSize : 40
                    }}> Procyon </Card.Title>
                    <Image source = {require('../assets/procyon.png')} style = {{
                        alignSelf : 'center',
                        marginTop : 10,
                        marginBottom : 10,
                        width : 450,
                        height : 300,
                        borderRadius : 20,
                    }}></Image>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Details', {planet_name : 'Procyon'});
                    }}>
                        <Text style = {style.button}> View Details </Text>
                    </TouchableOpacity>
                </Card>


                <Card containerStyle = {{
                    backgroundColor : '#00ADB5',
                    borderRadius : 20,
                    marginTop : 30,
                }}>
                    <Card.Title style = {{
                        fontFamily : 'bradley hand', 
                        color : '#222831',
                        fontSize : 40
                    }}> Aldebaran </Card.Title>
                    <Image source = {require('../assets/aldebaran.png')} style = {{
                        alignSelf : 'center',
                        marginTop : 10,
                        marginBottom : 10,
                        width : 450,
                        height : 350,
                        borderRadius : 20,
                    }}></Image>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Details', {planet_name : 'Aldebaran'})
                    }}>
                        <Text style = {style.button}> View Details </Text>
                    </TouchableOpacity>
                </Card>


                <Card containerStyle = {{
                    backgroundColor : '#00ADB5',
                    borderRadius : 20,
                    marginTop : 30,
                }}>
                    <Card.Title style = {{
                        fontFamily : 'bradley hand', 
                        color : '#222831',
                        fontSize : 40
                    }}> Fomalhaut </Card.Title>
                    <Image source = {require('../assets/fomalhaut.png')} style = {{
                        alignSelf : 'center',
                        marginTop : 10,
                        marginBottom : 10,
                        width : 450,
                        height : 350,
                        borderRadius : 20,
                    }}></Image>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Details', {planet_name : 'Fomalhaut'})
                    }}>
                        <Text style = {style.button}> View Details </Text>
                    </TouchableOpacity>
                </Card>


                <Card containerStyle = {{
                    backgroundColor : '#00ADB5',
                    borderRadius : 20,
                    marginTop : 30,
                    marginBottom : 40
                }}>
                    <Card.Title style = {{
                        fontFamily : 'bradley hand', 
                        color : '#222831',
                        fontSize : 40
                    }}> Gliese 1214 </Card.Title>
                    <Image source = {require('../assets/gliese.png')} style = {{
                        alignSelf : 'center',
                        marginTop : 10,
                        marginBottom : 10,
                        width : 450,
                        height : 350,
                        borderRadius : 20,
                    }}></Image>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Details', {planet_name : 'Gliese 1214'})
                    }}>
                        <Text style = {style.button}> View Details </Text>
                    </TouchableOpacity>
                </Card>

                
            </View>
        )
    }
}

const style = StyleSheet.create({
    button : {
        display : 'flex',
        marginBottom : 10,
        borderRadius : 10,
        alignSelf : 'center',
        height : 40,
        width : '30%',
        backgroundColor : 'orange',
        color : 'black',
        marginTop : 10,
        fontFamily : "bradley hand",
        justifyContent : 'center',
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 30
    }
})
