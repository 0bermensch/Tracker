import React, {useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const {signin} = useContext(AuthContext) 

  return (
    <View>
      <Text style={{ fontSize: 48 }}>Title</Text>
      <Spacer><Button title="Sign Out" onPress={signout}/></Spacer>
      
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
