import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';
import { TextInput } from 'react-native';
import Input from '../../components/input/Input';
import comments from '../../assets/datas/comments';
import Comments from '../../components/Comments/Comments';

const CommentScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER */}

      <View style={styles.header}>
        <Ionicons name="chevron-back" size={34} color="black" />
        <Text style={styles.headertext}>Comments</Text>
        <Feather name="send" size={30} color="black" />
      </View>

      {/* comment section */}

      <FlatList
        data={comments}
        renderItem={({ item }) => {
          return <Comments comment={item} isCommentPage />;
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 130 }}
      />

      {/* footer */}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Input />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    marginRight: Platform.OS === 'ios' ? 0 : 20,
  },
  headertext: {
    color: colors.black,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semi,
  },
});

export default CommentScreen;
