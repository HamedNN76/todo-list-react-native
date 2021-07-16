import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef } from './src/navigation/navigation';
import { SplashScreen } from './src/components/Navigation/SplashScreen';
import { Navigation } from './src/components/Navigation/Navigation';
import { configureStore } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from './src/components/Kit';

export const { store, persistor } = configureStore();

export default function App() {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        isReadyRef.current = true;
      }}
    >
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <ThemeProvider>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
