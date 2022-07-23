import { useFonts, Comfortaa_500Medium } from '@expo-google-fonts/comfortaa';
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Charm_400Regular } from '@expo-google-fonts/charm'

let [fontsLoaded] = useFonts({
    Comfortaa_500Medium,
    Charm_400Regular,
    Cookie_400Regular
})

const fonts = StyleSheet.create({
        title: { fontSize: 80, fontFamily: 'Cookie_400Regular' },
        slogan: { fontSize: 30, fontFamily: 'Charm_400Regular' },
        normal: { fontSize: 20, fontFamily: 'Comfortaa_500Medium' }
});

export default fonts;