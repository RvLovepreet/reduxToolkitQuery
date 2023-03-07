import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {useGetPokemonByNameQuery} from './services/pokemon';
const Main = () => {
  const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur');
  return (
    <>
      <View>
        <View className="App">
          {error ? (
            <Text>Oh no, there was an error</Text>
          ) : isLoading ? (
            <Text>Loading...</Text>
          ) : data ? (
            <>
              <Text>{data.species.name}</Text>
              <Image
                style={{width: 230, height: 400}}
                source={{uri: data.sprites.front_shiny}}
              />
            </>
          ) : null}
        </View>
      </View>
    </>
  );
};
export default Main;
