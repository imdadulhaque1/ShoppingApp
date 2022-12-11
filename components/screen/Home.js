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
            <Text style={styles.brandDetails}>
              Audio Shop on Rustaveli Ave 57. {'/n'}This is shop offers both Products and Services
            </Text>
          </View>
          <View style={{padding: 16}}>
            <Text style={styles.productStyle}>Products</Text>
            <Text style={styles.productNumber}>41</Text>
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
  brandDetails:{
    fontSize: 14,
    color: COLOURS.black,
    fontWeight:'400',
    letterSpacing: 1,
    lineHeight: 20,
  },
  productStyle:{
    fontSize: 18,
    color: COLOURS.black,
    fontWeight:'500',
    letterSpacing: 1,
  },
  productNumber:{
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    opacity: 0.5,
  }
});
