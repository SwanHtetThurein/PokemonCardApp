import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, SafeAreaView } from 'react-native';
import PokemonCard from './components/PokemonCard';



export default function App() {
  
  const pokemonData = [ // array of pockemon data, comprised with objects 
    {
      name: "Charmander",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Leer"],
      weaknesses: ["Water", "Rock"]
    },
    {
      name: "Pikachu",
      image: require("./assets/pikachu.png"),
      type: "Electric",
      hp: 42,
      moves: ["Scratch", "Ember", "Leer"],
      weaknesses: ["Fire", "Water"]
    },
  ]


  return (
    <View style={styles.container}>
      <ScrollView >// for scrolling down
        {pokemonData.map((pokemon) => {
          return <PokemonCard  {...pokemon}/>
        })}
      </ScrollView>
    </View>
      
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS == 'android' ? 35 : 0
  },
});
