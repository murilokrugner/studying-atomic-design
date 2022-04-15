import React from 'react';
import { View, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

import PostLiked from '../../../components/atoms/PostLiked';
import PostLikedAvatar from '../../atoms/PostLikedAvatar';

type Props = {
    avatar: ImageProps;
    likes: number;
}

const PostAbout: React.FC<Props> = ({avatar, likes}) => {
  return (
    <View style={styles.postAbout}>
        <PostLikedAvatar source={avatar} />
        <PostLiked value={likes}/>
    </View>
  );
}

export default PostAbout;