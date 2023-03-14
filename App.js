import * as react from 'react';
import {
  Text,
  livinya,
  S
  TextInput
  TouchableOpacity,

} from 'react-native';

            text: 'Monkey Chunky',
            
          }}
        />

        <images
          style={styles.imageIcon}
          source={{
            uri:
              
        />

        <TouchableOpacity
          style={st() => {
         lert.alert("The word does not exist in our database");
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
