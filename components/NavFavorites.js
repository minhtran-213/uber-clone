import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Diamond Riverside, Ho chi minh, Viet nam',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'FPT University',
  },
];
const NavFavorites = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 1 }]} />
        )}
        renderItem={({ item: { location, icon, destination } }) => (
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type='ionicon'
              color='white'
              size={18}
            />
            <View>
              <Text style={styles.title}>{location}</Text>
              <Text style={styles.subtitle}>{destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavFavorites;

const styles = StyleSheet.create({
  title: tw`font-semibold text-lg`,
  subtitle: tw`text-gray-500`,
});
