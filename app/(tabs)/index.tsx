import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */}
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/Fatur07-02/pertemuan2/main/assets/images/fatur.jpeg',
        }}
        //  bisa juga menggunakan local image
        //  image: source={require('../assets/images/gambar22.png')}

        style={styles.profilePic}
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Muhammad Raihan Faturrahman</Text>
      <Text style={styles.nim}>NIM: 243303621241</Text>
      <Text style={styles.jurusan}>Sistem Informasi</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 If you don’t believe you are the best, then you will never achieve
          all that you are capable of🔥
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: '#ffff99',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  nim: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 5,
    letterSpacing: 2,
  },
  jurusan: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 10,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
