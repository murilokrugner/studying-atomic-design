import React from 'react';
import { View, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

import PostHeader from '../../molecules/PostHeader';
import PostPhoto from '../../atoms/PostPhoto';
import PostOptions from '../../molecules/PostOptions';
import PostAbout from '../../molecules/PostAbout';
import PostDescription from '../../atoms/PostDescription';

type Profile = {
    id: number;
    name: string;
    avatar: ImageProps;
}

export type PostProps = {
    id: number;
    username: string
    location: string;
    likes: number;
    cover: ImageProps;
    description: string;
    lastLiked: Profile;
}

type Props = {
    data: PostProps;
}

const Post: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.post}>    

    <PostHeader 
        username={data.username}
        location={data.location}
    />

    <PostPhoto source={data.cover}/>

    <View style={styles.postFooter}>

      <PostOptions />      

      <PostAbout 
        avatar={data.lastLiked.avatar} 
        likes={data.likes}
        />

      <PostDescription value={data.description} />
    </View>
  </View>
  );
}

export default Post;