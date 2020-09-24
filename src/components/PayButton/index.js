import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Button
          colors={
            focused
              ? ['#fff', '#ccc']
              : ['#00c6ff', '#43cea2']
          }
          start={[1, 0.04]}
        >
          <MaterialIcons
            name="attach-money"
            size={30}
            color={focused ? '#000' : '#fff'}
          />
          <Label focused={focused}>Pagar</Label>
        </Button>
      </TouchableWithoutFeedback>
    );
  }