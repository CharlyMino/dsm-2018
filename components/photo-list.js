import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { List, ListItem } from "react-native-elements";


class PhotoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photos: null, photoset_id: props.idAlbum };
    }

    componentDidMount() {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.state.photoset_id}&user_id=114354307@N06&format=json&nojsoncallback=1`)
            .then(({ data }) => {
                console.log(data.photosets.photoset);
                this.setState({
                    photos: data.photosets.photoset
                });
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (!this.state.photos) {
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Bajando las fotulis...</Text>
            </View>
        }
        return (
            <View>
                <List>
                    <FlatList
                        data= {this.state.photos}
                        renderItem = {({ data }) => (
                        <Image
                            style={{ width: 300, height: 300 }}
                            source={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg` }}
                        />
                    )}
                    />
                </List>
            </View>
        );
    }
}

export default PhotoList;
