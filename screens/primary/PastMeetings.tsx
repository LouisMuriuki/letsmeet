import { StyleSheet, Text, View } from 'react-native'
import React ,{useContext}from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const PastMeetings = () => {
    const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <View>
      <Text>PastMeetings</Text>
    </View>
  )
}

export default PastMeetings

const styles = StyleSheet.create({})