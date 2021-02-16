import firebase from '../fb';

export function getBlogs() {
  return (dispatch) => {
    // our loading screen
    dispatch({
      type: 'BLOGS_LOADING_STATUS',
      payload: true,
    });

    firebase
      .database()
      .ref('/My blogs')
      .on('value', (snapshot) => {
        dispatch({
          type: 'BLOGS_FETCH',
          payload: snapshot.val(),
        });
        dispatch({
          type: 'BLOGS_LOADING_STATUS',
          payload: false,
        });
      });
  };
}

export function postBlogs(title, content) {
  return (dispatch) => {
    firebase.database().ref('/My blogs').push({title, content});
    // get from firebase
  };
}

export function deleteBlog(key) {
  return (dispatch) => {
    firebase.database().ref(`/My blogs/${key}`).remove();
    // delete from firebase
  };
}

export function editBlog(title, content, key) {
  return (dispatch) => {
    firebase.database().ref(`/My blogs`).child(key).update({title, content});
    // edit from firebase
  };
}
