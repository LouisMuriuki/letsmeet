import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import theme from '../../theme/theme';
import Form from '../../components/Form';
const NewInvitation = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <View style={[styles.container,{ 
      backgroundColor: darkmode
        ? theme.dark.background
        : theme.light.background,
    }]}>
      <Form/>
    </View>
  )
}

export default NewInvitation

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})