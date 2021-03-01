/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React  from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import Dashboard from './src/Dashboard/Dashboard'
import User from './src/User/User';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    {/* <Dashboard/> */}
    <User/>
  </ApplicationProvider>
  )
}

export default App
