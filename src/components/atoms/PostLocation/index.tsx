import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type Props = TextProps & {
    value: string;
}

const PostLocation: React.FC<Props> = ({value}) => {
  return (
    <Text style={styles.postLocation}>{value}</Text>
  );
}

export default PostLocation;