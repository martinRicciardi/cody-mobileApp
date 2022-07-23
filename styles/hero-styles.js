import { StyleSheet, useWindowDimensions } from 'react-native';
import heroStyles from './hero-styles';

function heroStyles() {
    const { height, width } = useWindowDimensions();
    const heroStyles = StyleSheet.create({
        text: {
            primary: { color: "#00695c" },
            light: { color: "#f7f3f3" },
            center: { textAlign: 'center' },
            shadowLight: {
                textShadowColor: '#fff',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 1
            },
            shadowPrimary: {
                textShadowColor: '#00695c',
                textShadowOffset: { width: 3, height: 1 },
                textShadowRadius: 1
            },
            shadowBlurLight: {
                textShadowColor: '#fff',
                textShadowOffset: { width: 3, height: 0 },
                textShadowRadius: 3
            },
            shadowBlurPrimary: {
                textShadowColor: '#00695c',
                textShadowOffset: { width: 3, height: 0 },
                textShadowRadius: 3
            }
        },
        heroContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: height,
            flex: 1
        },
        textContainer: {
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '100%',
            backgroundColor: '#00000030',
            paddingVertical: 85,
            backgroundColor: '#f9b3844f',
            marginRight: '5rem',
            width: '50%',
        },
        cta: {
            container: {
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: '#00695c',
                textAlign: "center",
                justifyContent: 'center',
                height: 45
            },
            text: {
                textTransform: "uppercase",
                color: 'white'
            }
        }
    });

    return heroStyles
}


export default heroStyles;