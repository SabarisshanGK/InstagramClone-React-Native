import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';
import { TextInput } from 'react-native';
import { useState } from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.log(newComment);
    setNewComment('');
  };
  return (
    <View style={styles.footer}>
      <View style={styles.emoji}>
        <Pressable
          onPress={() => setNewComment(newComment + '♥️')}
          hitSlop={15}
        >
          <Text style={{ fontSize: fonts.size.lg }}>♥️</Text>
        </Pressable>
        <Pressable
          onPress={() => setNewComment(newComment + '🙌')}
          hitSlop={10}
        >
          <Text style={{ fontSize: fonts.size.lg }}>🙌</Text>
        </Pressable>
        <Pressable
          onPress={() => setNewComment(newComment + '🔥')}
          hitSlop={10}
        >
          <Text style={{ fontSize: fonts.size.lg }}>🔥</Text>
        </Pressable>
        <Text
          style={{ fontSize: fonts.size.lg }}
          onPress={() => setNewComment(newComment + '👏')}
        >
          👏
        </Text>
        <Text
          style={{ fontSize: fonts.size.lg }}
          onPress={() => setNewComment(newComment + '😥')}
        >
          😥
        </Text>
        <Text
          style={{ fontSize: fonts.size.lg }}
          onPress={() => setNewComment(newComment + '😍')}
        >
          😍
        </Text>
        <Text
          style={{ fontSize: fonts.size.lg }}
          onPress={() => setNewComment(newComment + '😮')}
        >
          😮
        </Text>
        <Text
          style={{ fontSize: fonts.size.lg }}
          onPress={() => setNewComment(newComment + '😂')}
        >
          😂
        </Text>
      </View>
      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={styles.footerImage}
      />

      <View style={styles.input}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Write a comment...."
          multiline
          style={styles.footerInput}
        />
        <Text onPress={onPost} style={styles.post}>
          POST
        </Text>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
  },
  footerImage: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
    marginTop: 55,
    alignItems: 'flex-end',
  },
  footerInput: {
    marginTop: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 25,
    paddingVertical: 10,
    paddingRight: 60,
    paddingTop: 15,
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 10,
  },
  emoji: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 25,
    position: 'absolute',
    top: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  post: {
    color: colors.blue,
    fontWeight: fonts.weight.semi,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
