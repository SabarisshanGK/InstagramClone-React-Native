import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { Ipost } from '../../assets/types/modals';
import Comments from '../Comments/Comments';
import { Pressable } from 'react-native';
import Carosel from '../Carosel/Carosel';
import VideoComponent from '../VideoComponent/VideoComponent';

interface IpostComponent {
  post: Ipost;
  isVisible: boolean;
}

const PostComponent = ({ post, isVisible }: IpostComponent) => {
  const [isDescriptionExpanded, setIsDiscriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDiscriptionExpanded(!isDescriptionExpanded);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  let lastTap = 0;

  const doubleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleLike();
    }

    lastTap = now;
  };

  let content = null;

  if (post.image) {
    content = (
      <Pressable onPress={doubleTap}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </Pressable>
    );
  } else if (post.images) {
    content = <Carosel images={post.images} onDoubleTap={doubleTap} />;
  } else if (post.video) {
    content = (
      <Pressable onPress={doubleTap}>
        <VideoComponent uri={post.video} paused={isVisible} />
      </Pressable>
    );
  }

  return (
    <SafeAreaView>
      {/* Header */}

      <View style={styles.Header}>
        <Image
          source={{
            uri: post.user.ProfilePic,
          }}
          style={styles.userProfilePic}
        />
        <Text style={styles.username}>{post.user.name}</Text>
        {post.user.verified && (
          <MaterialIcons name="verified" size={14} color="#00aced" />
        )}
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color="black"
          style={{ marginLeft: 'auto' }}
        />
      </View>

      {/* Content */}

      {content}

      {/* Footer */}

      <View style={styles.footer}>
        {/* footer icons */}

        <View style={styles.footericons}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              color={isLiked ? colors.accent : colors.black}
              style={styles.icons}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color={colors.black}
            style={styles.icons}
          />
          <Feather
            name="send"
            size={24}
            color={colors.black}
            style={styles.icons}
          />
          <Feather
            name="bookmark"
            size={24}
            color={colors.black}
            style={{ marginLeft: 'auto' }}
          />
        </View>

        {/* Likes description */}

        <Text style={styles.text}>
          Liked By <Text style={styles.bold}>{post.likedUser.name}</Text> and{' '}
          <Text style={styles.bold}>
            {isLiked ? post.noOfLikes + 1 : post.noOfLikes} others
          </Text>
        </Text>

        {/* Description of Post */}

        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{post.user.name}</Text> {post.description}
        </Text>

        <Text
          style={{ color: colors.grey }}
          onPress={toggleDescriptionExpanded}
        >
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        <Text style={{ color: colors.grey, marginTop: 5 }}>
          View all {post.noOfComments} comments
        </Text>

        {/* Comments */}

        {post.comments.map((comments) => {
          return <Comments comment={comments} key={comments.id} />;
        })}

        <Text style={{ color: colors.grey, marginVertical: 5 }}>
          {post.createdAt}
        </Text>
      </View>
      {/* End of Post Component */}
    </SafeAreaView>
  );
};

export default PostComponent;
