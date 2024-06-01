import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fundohome.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>



      <ThemedText style={styles.comentario}>
        Este aplicativo é destinado para a divulgação de algumas redes sociais
      </ThemedText>

      <ThemedText style={styles.subtitulo}>
        <ThemedText type="defaultSemiBold">O que você verá aqui:
        </ThemedText>
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitulo: {
    gap: 8,
    marginBottom: 8,
  },
  comentario: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 280,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
