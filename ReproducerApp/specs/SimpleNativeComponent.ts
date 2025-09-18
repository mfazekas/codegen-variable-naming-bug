import type {
  CodegenTypes,
  HostComponent,
  ViewProps,
} from 'react-native';
import {codegenNativeComponent} from 'react-native';

type MyEventType = {
  type: string;
  payload: {
    message: string;
  }
};

export interface NativeProps extends ViewProps {
  onPressed?: CodegenTypes.BubblingEventHandler<MyEventType> | null;
}

export default codegenNativeComponent<NativeProps>('SimpleView') as HostComponent<NativeProps>;

