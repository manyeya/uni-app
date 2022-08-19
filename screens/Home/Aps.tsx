import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { Theme } from '../../constants'

const Aps = ({navigation}:any) => {
  return (
    <SafeAreaView>
    <Appbar.Header style={{ backgroundColor: '#383F95' }}>
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content title="Aps" color='white'/>
    </Appbar.Header>
  </SafeAreaView>
  )
}

export default Aps

const styles = StyleSheet.create({})