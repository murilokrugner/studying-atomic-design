import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type Props = TextProps & {
    value: string;
}

const PostDescription: React.FC<Props> = ({value}) => {
  return (
    <Text style={styles.description}>{value}</Text>
  );
}

export default PostDescription;