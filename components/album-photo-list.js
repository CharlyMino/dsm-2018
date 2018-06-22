import React from 'react';
import axios from 'axios';
import { Text, View, FlatList, Image } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

class AlbumPhotoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {albums:null}
    }

    componentDidMount() {
        axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=114354307@N06&format=json&nojsoncallback=1')
            .then(({ data }) => {
                console.log(data.photosets.photoset);
                this.setState({
                    albums: data.photosets.photoset
                });
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    showPhotosOfAlbum(id) {
        return <PhotoList id={id}/>
    }

    render() {
        if (!this.state.albums) {
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Cargando, dame un toque flaco...</Text>
                </View>
            );
        }
        return (
            <View>
                <List>
                    <FlatList
                        data={this.state.albums}
                        renderItem={({ item }) => (
                            <ListItem 
                                title={item.title._content}
                                onPress={({item}) => {
                                    showPhotosOfAlbum(item.id);
                                }}
                            />
                        )}
                        keyExtractor={(item, index) => item.id}
                    />
                </List>
            </View>
        );
    }

}

export default AlbumPhotoList;