import React from 'react';
import { View } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

import PostAvatar from '../../atoms/PostAvatar';
import PostUserName from '../../atoms/PostUserName';

import {
    ProfileIcon
  } from '../../../global/styles/icons';
import PostLocation from '../../atoms/PostLocation';

type Props = {
    username: string;
    location: string;
}

const PostHeader: React.FC<Props> = ({username, location}) => {
  return (
    <View style={styles.postHeader}>
        <PostAvatar source={ProfileIcon}/>
        <View>
          <PostUserName value={username}/>
          <PostLocation value={location} />
        </View>
    </View>
  );
}

export default PostHeader;