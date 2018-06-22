import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import AlbumPhotoList from './components/album-photo-list.js'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AlbumPhotoList />
    );
    
  }
}

export default App;