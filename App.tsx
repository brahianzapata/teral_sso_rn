import { SafeAreaView } from 'react-native';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import { HomeScreen } from './src/presentation/screen/home/HomeScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ width: 400, flex: 1, padding: 20, alignSelf: 'center' }}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default withAuthenticator(App);

