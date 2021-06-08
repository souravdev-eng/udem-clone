import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://i.pinimg.com/originals/d1/d7/11/d1d7113a292af6ebbe146a83c8a752a5.png',
        }}
      />
      <View style={styles.inputContainer}>
        <Text>Sign In with email / password</Text>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 145,
    height: 225,
  },
  textContainer: {
    position: 'relative',
    left: -140,
    marginVertical: 10,
  },
  inputContainer: {
    // // borderBottomColor: '#000',
    // borderBottomWidth: 1,
    // width: 325,
    // alignItems: 'flex-start',
    // paddingLeft: 8,
    // height: 30,
    backgroundColor: 'yellow',
    width: 325,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
