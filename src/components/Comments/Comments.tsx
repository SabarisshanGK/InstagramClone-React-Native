import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';
import { AntDesign } from '@expo/vector-icons';
import { IComment } from '../../assets/types/modals';
import { useState } from 'react';

interface IcommentComponent {
  comment: IComment;
  isCommentPage: boolean;
}

const Comments = ({ comment, isCommentPage = false }: IcommentComponent) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.comment}>
      {isCommentPage && (
        <Image
          source={{ uri: comment.user.ProfilePic }}
          style={{
            width: 40,
            aspectRatio: 1,
            borderRadius: 25,
            marginRight: 5,
            borderWidth: 1,
            borderColor: colors.lightGrey,
            marginLeft: 5,
          }}
        />
      )}
      <View style={styles.middle}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.content}
        </Text>
        {isCommentPage && (
          <View style={styles.footer}>
            <Text
              style={{
                color: colors.grey,
                marginRight: 5,
                fontWeight: fonts.weight.bold,
              }}
            >
              2h
            </Text>
            <Text
              style={{
                color: colors.grey,
                marginRight: 5,
                fontWeight: fonts.weight.bold,
              }}
            >
              20 likes
            </Text>
            <Text
              style={{
                color: colors.grey,
                marginRight: 5,
                fontWeight: fonts.weight.bold,
              }}
            >
              reply
            </Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={12}
          color={isLiked ? colors.accent : colors.black}
          style={{ marginLeft: 'auto' }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: { color: colors.black, fontWeight: fonts.weight.bold },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Platform.OS === 'ios' ? 5 : 10,
    marginTop: 5,
  },
  commentUserName: { flexDirection: 'row', marginHorizontal: 5 },
  commentText: { color: colors.black, lineHeight: 18, flex: 1 },
  footer: { flexDirection: 'row', marginBottom: 10 },
  middle: { flex: 1, marginRight: 5 },
});
export default Comments;
