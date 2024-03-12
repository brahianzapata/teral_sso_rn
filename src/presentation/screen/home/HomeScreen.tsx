import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, Text, View } from "react-native";


export const HomeScreen = () => {
    
    const userSelector = (context: any) => [context.user];
    const [loading, setLoading] = useState(true);

    const { user, signOut } = useAuthenticator(userSelector);

    useEffect(() => {
        setLoading(false); 
    }, []);

    const handleSignOut = async () => {
      setLoading(true);
      await signOut();
    };

    return (
        <>
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0D6EFD" />
                </View>
            ) : (
                <View style={{ width: 400, flex: 1, padding: 20, alignSelf: 'center' }}>
                    <Text style={{ alignSelf: 'center', marginBottom: 30, fontSize: 40, color: '#0D6EFD' }}>
                        Bienvenido al Reto Técnico Front
                    </Text>
                    <Image
                        style={{ alignSelf: 'center', width: 100, height: 100, marginBottom: 20 }}
                        source={require("../../../assest/teral_image.jpeg")}
                    />
                    <Text style={{ alignSelf: 'center', marginBottom: 5, fontSize: 20 }}>
                        Te has logeado con el siguiente email:
                    </Text>
                    <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 20, color: '#0D6EFD' }}>
                        {user.signInDetails?.loginId}
                    </Text>
                    <Button
                        title="Logout"
                        onPress={ handleSignOut }
                    />
                </View>
            )}

        </>

            
    );
}