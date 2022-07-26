import { View, useWindowDimensions } from 'react-native';

import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={{height: height}}>
      <Hero />
      <About />
    </View>
  )
}

export default Home