import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getBlogs, deleteBlog} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }

  render() {
    // console.log(this.props.loadingReducer);
    return (
      <View style={Styles.container}>
        {this.props.loadingReducer ? (
          <Text>Loading Please Wait</Text>
        ) : (
          <FlatList
            style={{width: '100%'}}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={Styles.contentContainer}>
                  <Text style={Styles.title}>{item.title}</Text>
                  <Text style={Styles.content}>{item.content}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 13,
                    }}>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate('Edit', {...item})
                      }>
                      <View>
                        <Icon size={30} color="white" name="edit" />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => this.props.deleteBlog(item.key)}>
                      <View>
                        <Icon size={30} color="white" name="trash-o" />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            }}
          />
        )}
        {/* <Zaq name="ios-star" fontFamily="Ionicons" size={30} /> */}
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
    loadingReducer: state.loadingReducer.loadingReducer,
    // one loading reducer from index.js and another from loading reducer.js
  };
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
  },
  contentContainer: {
    elevation: 8,
    borderRadius: 15,
    backgroundColor: '#575FCF',
    padding: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    borderRadius: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 10,
    textAlign: 'right',
  },
  content: {
    fontSize: 20,
    lineHeight: 30,
    color: '#fff',
    elevation: 10,
    padding: 10,
    backgroundColor: '#575FCF',
    marginBottom: 4,
  },
  // FlatList: {
  //     width: '100% ',
  // },
});

export default connect(mapStateToProps, {getBlogs, deleteBlog})(Blogs);
