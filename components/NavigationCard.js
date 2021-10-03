import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { setDestination } from '../slices/navSlice';
import NavFavorites from './NavFavorites';
import { apikey } from '../apikey';
const NavigationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center text-xl mt-5`}>Good morning, Minh</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}></View>
      <View>
        <GooglePlacesAutocomplete
          placeholder='Where to?'
          styles={toInputBoxStyles}
          query={{
            key: 'AIzaSyB7_ceQkHvnty47OsNLLh4czvjaX97J1IY',
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate('RideOptionsCard');
          }}
        />
      </View>
      <NavFavorites />
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate('RideOptionsCard')}>
          <Icon name='car' type='font-awesome' color='white' size={16} />
          <Text style={tw`text-white text-center`}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon
            name='fast-food-outline'
            type='ionicon'
            color='black'
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 2,
    fontSize: 18,
  },
  textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});
