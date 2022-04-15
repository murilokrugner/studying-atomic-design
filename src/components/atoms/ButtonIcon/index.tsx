import React from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from '../../../pages/Feed/styles';

type Props = BorderlessButtonProps & {
    icon: React.FC<SvgProps>;
}

const ButtonIcon: React.FC<Props> = ({icon: Icon, ...rest}) => {
  return (
      <BorderlessButton style={styles.postOptionsIcon} {...rest}>
          <Icon />
      </BorderlessButton>
  );
}

export default ButtonIcon;