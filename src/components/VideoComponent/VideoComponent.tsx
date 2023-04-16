import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Video, ResizeMode } from 'expo-av';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../assets/theme/colors';

interface IVideo {
  uri: string;
  paused: boolean;
}

const VideoComponent = ({ uri, paused }: IVideo) => {
  const [muted, setMuted] = useState(false);

  return (
    <View>
      <Video
        source={{ uri }}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        isLooping={true}
        rate={1.0}
        volume={1.0}
        shouldPlay={paused}
        isMuted={muted}
      />
      <Pressable
        onPress={() => {
          setMuted(!muted);
        }}
        style={styles.mute}
      >
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
};

export default VideoComponent;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  mute: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
  },
});
