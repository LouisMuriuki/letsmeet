import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const CancelledMeetings = () => {
    const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <View>
      <Text>CancelledMeetings</Text>
    </View>
  )
}

export default CancelledMeetings

const styles = StyleSheet.create({})