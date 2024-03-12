import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button
} from 'react-native';
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';


function App(): React.JSX.Element {

  const userSelector = (context: any) => [context.user];

  const SignOutButton = () => {
    const { user, signOut } = useAuthenticator(userSelector);
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Bienvenido al Reto Técnico Front
          </Text>
          <Image
            style={styles.image}
            source={require("./assest/teral_image.jpeg")}
          />
          <Text style={styles.labelSecond}>
            Te has logeado con el siguiente email:
          </Text>
          <Text style={styles.labelPrimary}>
            {user.signInDetails?.loginId}
          </Text>
          <Button
            title="Logout"
            onPress={ signOut }
          />
        </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignOutButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  buttonContainer: {
    backgroundColor: '#0D6EFD',
    color: "white"
  },
  title: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 40,
    color: '#0D6EFD'
  },
  labelPrimary: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 20,
    color: '#0D6EFD'
  },
  labelSecond: {
    alignSelf: 'center',
    marginBottom: 5,
    fontSize: 20,
  },
  image: { 
    alignSelf: 'center',
    width: 100, 
    height: 100, 
    marginBottom: 20 
  }
});

export default withAuthenticator(App);

