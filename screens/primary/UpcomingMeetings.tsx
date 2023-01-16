import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const UpcomingMeetings = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <View>
      <Text>UpcomingMeetings</Text>
    </View>
  )
}

export default UpcomingMeetings

const styles = StyleSheet.create({})