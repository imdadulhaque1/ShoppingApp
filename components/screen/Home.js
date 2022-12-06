/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOURS} from './../Database/Database';
import Entypo from 'react-native-vector-icons/Entypo';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.InnerView}>
            <TouchableOpacity>
              <Entypo name="shopping-bag" style={styles.iconChange} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
  },
  InnerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconChange: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
  },
});
