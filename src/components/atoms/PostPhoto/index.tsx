import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

const PostPhoto: React.FC<ImageProps> = ({...rest}) => {
  return (
    <Image 
        {...rest} 
        style={styles.cover} 
    />
  );
}

export default PostPhoto;