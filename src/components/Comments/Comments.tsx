import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';
import { AntDesign } from '@expo/vector-icons';
import { IComment } from '../../assets/types/modals';

interface IcommentComponent {
  comment: IComment;
}

const Comments = ({ comment }: IcommentComponent) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.content}
      </Text>

      <AntDesign
        name="hearto"
        size={12}
        color={colors.black}
        style={{ marginLeft: 'auto' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bold: { color: colors.black, fontWeight: fonts.weight.bold },
  comment: { flexDirection: 'row', alignItems: 'center' },
  commentUserName: { flexDirection: 'row', marginHorizontal: 5 },
  commentText: { color: colors.black, lineHeight: 18, flex: 1 },
});
export default Comments;
