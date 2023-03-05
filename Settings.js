import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSMS, togglePush, toggleEmail } from './notificationsSlice';

function Settings() {

  const dispatch = useDispatch();
  const { sms, push, email } = useSelector(state => state.notifications);

  function handleSMSSwitch (value)  {
   
    dispatch(toggleSMS(value));
  };

  function handlePushSwitch  (value)  {
   
    dispatch(togglePush(value));
  }

  function handleEmailSwitch  (value)  {
    
    dispatch(toggleEmail(value));
  };

  return (
    <View style={styles.Appcontainer}>
      <View >
        <Text style={styles.Text} >SMS notifications</Text>
        <Switch
          value={sms}
          onValueChange={handleSMSSwitch}
      
        />
      </View>
      <View >
        <Text  style={styles.Text}>Push notifications</Text>
        <Switch
          value={push}
          onValueChange={handlePushSwitch}
         
        />
      </View>
      <View style>
        <Text style={styles.Text}>Email notifications</Text>
        <Switch
          value={email}
          onValueChange={handleEmailSwitch}
        
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
Appcontainer:{
  padding:80,
  backgroundColor:"rgba(190, 208, 239, 1)",
  height:"100%"
},
Text:{
  fontSize:15,
  marginVertical:10,
  fontWeight:"bold"
}
});

export default Settings;
