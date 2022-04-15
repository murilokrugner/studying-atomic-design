import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type Props = TextProps & {
    value: string;
}

const PostUserName: React.FC<Props> = ({value}) => {
  return (
    <Text style={styles.postUsername}>{value}</Text>
  );
}

export default PostUserName;