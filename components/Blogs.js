import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {getBlogs} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
class Blogs extends Component {
    componentDidMount() {
        this.props.getBlogs();
    }

    render() {
        console.log('Blogs.js', this.props.listOfBlogs);
        return (
            <View style={Styles.container}>
                <Text>Fetch Blog articles</Text>
                <FlatList
                    style={{width: '100%'}}
                    data={this.props.listOfBlogs}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <View style={Styles.contentContainer}>
                                <Text style={Styles.title}>{item.title}</Text>
                                <Text style={Styles.content}>
                                    {item.content}
                                </Text>
                            </View>
                        );
                    }}
                />

                {/* <Button
          title="Go to Edit"
          onPress={() => this.props.navigation.navigate('Edit')} //(from routes)
        /> */}
            </View>
        );
    }
}

function mapStateToProps(state) {
    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key: key,
        };
    });
    return {
        listOfBlogs,
    };
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    contentContainer: {
        elevation: 8,
        borderRadius: 15,
        backgroundColor: '#575FCF',
        padding: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 25,
        color: '#fff',

        borderRadius: 15,
        // textAlign: 'center',
        fontWeight: 'bold',
    },
    content: {
        fontSize: 20,
        lineHeight: 30,
        color: '#fff',
        elevation: 8,
        padding: 10,
        backgroundColor: '#575FCF',
    },
    // FlatList: {
    //     width: '100% ',
    // },
});

export default connect(mapStateToProps, {getBlogs})(Blogs);
