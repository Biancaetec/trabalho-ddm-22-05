import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, TouchableOpacity, Linking, View, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const handleEmailPress = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/?ogbl#inbox');
  };

  const handleWhatsappPress = () => {
    Linking.openURL('https://api.whatsapp.com/send/?phone=18996152301&text&type=phone_number&app_absent=0');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/_.bianca.limaa/?igsh=M2NzaDk1YjViYnAy');
  };

  const handleTiktokPress = () => {
    Linking.openURL('https://www.tiktok.com/@bianca.limaa_?_t=8lxN3osZDtu&_r=1');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://x.com/BiancaLima89966');
  };

  const handleTelefonePress = () => {
    const phoneNumber = '18996152301'; // Número de telefone que você deseja discar
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  const handleLinkdinPress = () => {
    Linking.openURL('https://www.linkedin.com/in/bianca-lima-23251b311/');
  };

  const handleGithubPress = () => {
    Linking.openURL('https://github.com/Biancaetec');
  };

  return (
    <ScrollView style={styles.container}>


      <View style={styles.container}>
        <Image source={require('@/assets/images/imgfundoperfil.jpg')} style={styles.headerImage} />

        <ThemedView style={styles.container}>
          <View style={styles.outerContainer}>
            <BlurView intensity={85} style={styles.blurContainer}>
              <View style={styles.innerContainer}>
                <Image source={require('@/assets/images/fotoperfil.jpg')} style={styles.perfil} />
              </View>
            </BlurView>
          </View>
          <ThemedText type="title" style={styles.nome}>Bianca Lima Neves</ThemedText>
        </ThemedView>

        <ThemedView style={styles.conteinerBotao}>
          <TouchableOpacity style={styles.botao} onPress={handleEmailPress}>
            <Ionicons name="mail-outline" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>Email</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleWhatsappPress}>
            <Ionicons name="logo-whatsapp" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>Whatsapp</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleInstagramPress}>
            <Ionicons name="logo-instagram" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>Instagram</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleTiktokPress}>
            <Ionicons name="logo-tiktok" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>TikTok</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleTwitterPress}>
            <Ionicons name="logo-twitter" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>Twitter</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleTelefonePress}>
            <Ionicons name="call-outline" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>Telefone</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleLinkdinPress}>
            <Ionicons name="logo-linkedin" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>LinkedIn</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleGithubPress}>
            <Ionicons name="logo-github" size={24} color="white" />
            <ThemedText style={styles.textoBotao}>Github</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    height: 250,
    width: '100%',
  },

  outerContainer: {
    width: 142,
    height: 142,
    borderRadius: 71,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
    marginLeft: 120,
    position: 'absolute',
    zIndex: 2, // Traz a imagem para a frente
  },
  blurContainer: {
    width: 142,
    height: 142,
    borderRadius: 71,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: 'hidden',
  },
  perfil: {
    width: '100%',
    height: '100%',
    borderRadius: 65,
  },
  nome: {
    fontSize: 23,
    textAlign: 'center',
    marginTop: 70, // Ajuste conforme necessário
    marginLeft: 84,
    position: 'absolute',
  },
  botao: {
    backgroundColor: '#C0C0C0',
    borderWidth: 2,
    borderColor: '#808080',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginBottom: 8,
    position: 'relative',

  },
  conteinerBotao: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140, // Ajuste para deslocar os botões mais para baixo

  },
  textoBotao: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
  },
});
