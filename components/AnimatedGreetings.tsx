import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'

const AnimatedGreetings = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
  return (
    <View>
      <Text>AnimatedGreetings</Text>
    </View>
  )
}

export default AnimatedGreetings

const styles = StyleSheet.create({})