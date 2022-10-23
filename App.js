import * as React from 'react';
import {
  Text,
  livinya,
  StyleSheet,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import { Headerct-native-elements';
import 
      <View style={styles.container}>
        <Header
         
          centerComponent={{
            text: 'Monkey Chunky',
            
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              
        />

        <TextInput
          
          onChangeText={text => {
            this.setState({ text: text });
          }}
          
        />
        <TouchableOpacity
          style={st() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]?(
            this.setState({ chunks: db[word].chunks }),
            this.setState({ phonicSounds: db[word].phones })
            ):
            Alert.alert("The word does not exist in our database");
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
                buttonIndex={index}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'green',
  },
  inputBox: {
    marginTop: 12,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 20,
    margin: 0,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 5,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 200,
    height: 150,
    marginLeft: 95,
  }
});
