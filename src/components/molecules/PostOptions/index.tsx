import React from 'react';
import { View } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

import ButtonIcon from '../../atoms/ButtonIcon';

import {
    MessengerIcon,
    FavoriteIcon,
    CommentIcon,
    SaveIcon,
  } from '../../../global/styles/icons';

const PostOptions: React.FC = () => {
  return (
    <View style={styles.postOptions}>
        <View style={styles.postOptionsSide}>
          <ButtonIcon icon={FavoriteIcon} />
          <ButtonIcon icon={CommentIcon} />
          <ButtonIcon icon={MessengerIcon} />
        </View>

        <ButtonIcon icon={SaveIcon} />
    </View>
  )
}

export default PostOptions;