import { Platform,View, StyleSheet, ActivityIndicator } from 'react-native';
import * as React from "react";
import { PRIMARY_COLOR } from '../constants/Colors';
import * as Progress from 'react-native-progress';

export default class AppProgressBar extends React.Component {

    render() {
        if (Platform.OS == "ios") {
            return (
                <View>
                    <ActivityIndicator size="large" color={PRIMARY_COLOR} />
                </View>
            );
        } else {

            return (
                <View>
                    <ActivityIndicator size="large" color={PRIMARY_COLOR} />
                </View>
            );
        }
    };
}
const styles = StyleSheet.create({

    ios: {
        color: PRIMARY_COLOR
    },
    android: {
        color: PRIMARY_COLOR
    }
});