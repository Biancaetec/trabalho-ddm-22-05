import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/img.jpg')}
          style={styles.imginicio}
        />
      }
    >
      <ThemedView style={styles.titulo}>
        <ThemedText type="title">Seja bem vindo!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.comentariocaixa}>
        <ThemedText style={styles.comentario}>
          Conecte-se diretamente às minhas redes sociais pessoais e acompanhe todas as novidades em um só lugar!
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.subtitulocaixa}>

        <ThemedText style={styles.subtitulo}>O que você encontrará aqui:</ThemedText>

        <ThemedText style={styles.topico}>
          <Icon name="check-circle" size={16} color="#147EFB" />  Acesso direto aos meus perfis em várias redes sociais.
        </ThemedText>
        <ThemedText style={styles.topico}>
          <Icon name="check-circle" size={16} color="#147EFB" />  Informações de contato para interação pessoal.
        </ThemedText>
        <ThemedText style={styles.topico}>
          <Icon name="check-circle" size={16} color="#147EFB" />  Atualizações e posts recentes de todas as minhas contas.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.saibamaiscaixa}>
        <ThemedText style={styles.saibamais}>
          <Icon name="info-circle" size={16} color="#FFFFFF" /> Acesse a aba Perfil e saiba mais.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  imginicio: {
    height: 290,
    width: '99%',
    marginLeft: 2,
    resizeMode: 'cover', // Ajustado para cobrir a área especificada
  },

  titulo: {
    marginLeft: 5,
    marginBottom: 1,
  },

  comentariocaixa: {
    marginBottom: 20,
    marginTop: 2,
    padding: 15,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    borderColor: '#00796B',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DCDCDC', // Define a cor da sombra.
    shadowOpacity: 0.05, //Define a opacidade da sombra.
    shadowRadius: 2.74, //Define o raio da sombra.
    elevation: 16, // Adiciona uma elevação para criar uma sombra no Android.

  },
  comentario: {
    fontSize: 16,
    color: '#004D40',
    textAlign: 'center',
  },

  subtitulocaixa: {
    paddingLeft: 10,
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  topico: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
  },

  saibamaiscaixa: {
    marginTop: 13,
    padding: 15,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saibamais: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

});
