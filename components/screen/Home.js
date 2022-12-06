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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ShoppingCartView}>
            <TouchableOpacity>
              <Entypo
                name="shopping-bag"
                style={[
                  styles.iconChange,
                  {backgroundColor: COLOURS.backgroundLight},
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="cart"
                style={[styles.iconChange, {borderColor: COLOURS.green}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyView}>
            <Text style={styles.brandView}>Modern Shop &amp; Service</Text>
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
  ShoppingCartView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bodyView: {
    merginButton: 10,
    padding: 10,
  },
  iconChange: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  brandView: {
    color: COLOURS.black,
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 1,
    merginButton: 10,
  },
});
