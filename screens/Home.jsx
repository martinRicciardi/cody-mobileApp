import { ScrollView } from 'react-native';

import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <ScrollView >
      <Hero />
      <About />
    </ScrollView>
  )
}

export default Home