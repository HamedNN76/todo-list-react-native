import React from 'react';
import { TouchableWithoutFeedbackProps as NativeTouchableWithoutFeedbackProps } from 'react-native';
import styled from 'styled-components/native';

export type TouchableWithoutFeedbackProps = NativeTouchableWithoutFeedbackProps;

export const TouchableWithoutFeedback: React.FC<TouchableWithoutFeedbackProps> = styled.TouchableWithoutFeedback<TouchableWithoutFeedbackProps>`
  flex: 1;
`;
