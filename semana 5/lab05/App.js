
import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

type Props = {};
export default class App extends Component<Props> {
  state = {
    loading: false,
    data: []
  }
  componentDidMount(){
    this.setState({loading: true});
    axios({
      method: 'GET',
      url: 'http://yts.am/api/v2/list_movies.json'
    }).then(response => {
      this.setState({
        loading: false,
        data: response.data.data.movies
      });
    }).catch(err => {
      this.setState({loading: false});
      console.warn(err);
    })
  }
  onPressHandler = item => {
    alert(item.description_full);
  }
render() {
  let contenido = (<Text>
    Cargando, espero por favor...
  </Text>);
  if(!this.state.loading){
    contenido = (<FlatList
      KeyExtractor={(item,index) => index+''}
        data={this.state.data}
        renderItem={({item, index}) => {
          return (<TouchableOpacity onPress={() => this.onPressHandler(item)} >
            <Text style={index%2===0?styles.ItemEven:styles.ItemUneven}>
              {item.title_long}
            </Text>
          </TouchableOpacity>);
        }}
        ListHeaderComponent={this.renderHeader}
    />);
  }
    return (<View>
      {contenido}  
    </View>);
  }
}
const styles = StyleSheet.create({
  ItemEven: {
    color: '#2B4B6F'
  },
  ItemUneven: {
    backgroundColor: '#D46A6A',
    color: 'white'
  }
});