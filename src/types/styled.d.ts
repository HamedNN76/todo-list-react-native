import 'styled-components';
import { Colors } from '../stylesheet';

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
