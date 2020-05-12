import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
let data = [0, 1, 2, 3, 4]

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 20 }}>
                        <Text>Movies</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Text>Movies</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-end', marginRight: 20 }}>
                        <Text>Movies</Text>
                    </View>
                </View>
                <View style={{ flex: 12 }}>
                    <ScrollView contentContainerStyle={{ flex: 1 }}>
                        <View style={{ flex: 4 }}>
                            <ScrollView horizontal={true} contentContainerStyle={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginLeft: 21 }}>
                                {
                                    data.map((row) => {
                                        return (
                                            <ImageBackground style={
                                                {
                                                    width: 315,
                                                    height: 151,
                                                    borderRadius: 12,
                                                    marginRight: 12
                                                }
                                            }
                                                source={
                                                    {
                                                        /* add your source here */
                                                    }
                                                } >
                                                <View style={
                                                    {
                                                        alignItems: "flex-start",
                                                        flex: 1
                                                    }
                                                } >
                                                    <View style={
                                                        {
                                                            alignItems: "flex-start",
                                                            width: 313,
                                                            height: 151,
                                                            borderRadius: 12,
                                                            backgroundColor: "rgba(255, 255, 255, 255)",
                                                            shadowColor: '#000',
                                                            shadowOffset: { width: 0, height: 3 },
                                                            shadowOpacity: 0.3,
                                                            shadowRadius: 6,
                                                        }
                                                    }
                                                    />
                                                </View>
                                            </ImageBackground>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                        <View style={{ flex: 6, backgroundColor: 'lime' }}></View>
                        <View style={{ flex: 6, backgroundColor: 'red' }}></View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default index;
