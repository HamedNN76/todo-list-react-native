import { config } from './../../../config';
import styled, { css } from 'styled-components/native';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';

export type SafeAreaViewProps = {
  marginBottom?: number;
};

export const setMarginBottom = ({ marginBottom }: SafeAreaViewProps) =>
  config.isIos() && marginBottom
    ? css`
        margin-bottom: -${marginBottom}px;
      `
    : '';

export const SafeAreaView = styled(NativeSafeAreaView)<SafeAreaViewProps>`
  flex: 1;
  ${setMarginBottom};
`;
