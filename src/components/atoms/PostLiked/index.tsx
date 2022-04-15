import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type Props = TextProps & {
    value: number;
}

const PostLiked: React.FC<Props> = ({value}) => {
  return (
    <Text style={styles.likes}>{value}</Text>
  );
}

export default PostLiked;