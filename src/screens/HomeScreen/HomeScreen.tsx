import {
  View,
  Text,
  SafeAreaView,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import posts from '../../assets/datas/posts';
import PostComponent from '../../components/PostComponent/PostComponent';

const HomeScreen = () => {
  const [activePost, setActivePost] = useState<string | null>(null);
  const configfunction: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActivePost(viewableItems[0].item.id);
      }
    }
  );
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <PostComponent post={item} isVisible={activePost === item.id} />
          );
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={onChanged.current}
        viewabilityConfig={configfunction}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
