import React from 'react';

//import { initAuth } from '../actions/SessionActions';
import Root from '../components/Root';
import SongContainer from '../containers/SongContainer';
import SongsContainer from '../containers/SongsContainer';
import UserContainer from '../containers/UserContainer';

import {
  INDEX_PATH,
  PLAYLIST_PATH,
  SONG_PATH,
  SONGS_PATH,
  USER_PATH,
} from '../constants/RouterConstants';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
    paths: [INDEX_PATH, PLAYLIST_PATH, SONG_PATH, SONGS_PATH, USER_PATH],
    router,
    routes: {
      [INDEX_PATH]: SongsContainer,
      [PLAYLIST_PATH]: SongsContainer,
      [SONG_PATH]: SongContainer,
      [SONGS_PATH]: SongsContainer,
      [USER_PATH]: UserContainer,
    },
  };
};


export default RootContainer
