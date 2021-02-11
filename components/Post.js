import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {postBlogs} from '../actions';
import {connect} from 'react-redux';

class Post extends Component {
    state = {
        title: '',
        content: '',
    };
    submit = () => {
        this.props.postBlogs(this.state.title, this.state.content);
        this.setState({
            title: '',
            content: '',
            // this clears the input after submit
        });
        this.props.navigation.navigate('NavStack');
    };
    render() {
        return (
            <View style={Styles.container}>
                <Text> Post something here</Text>
                <TextInput
                    style={Styles.title}
                    placeholder="title"
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />

                <TextInput
                    style={Styles.content}
                    placeholder="content"
                    onChangeText={(content) => this.setState({content})}
                    value={this.state.content}
                />
                <Button title="Submit" onPress={this.submit} />
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 30,
    },
    title: {
        marginTop: 20,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
    },
    content: {
        marginTop: 20,
        height: 100,
        borderColor: 'grey',
        borderWidth: 1,
    },
});

export default connect(null, {postBlogs})(Post);
