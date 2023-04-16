import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import colors from '../../assets/theme/colors';

interface ICarosel {
  images: string[];

  onDoubleTap?: () => void;
}

const Carosel = ({ images, onDoubleTap = () => {} }: ICarosel) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const configfunction: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    }
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Pressable onPress={onDoubleTap}>
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onChanged.current}
        viewabilityConfig={configfunction}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: -25,
          width: width,
        }}
      >
        {images.map((_, index) => {
          return (
            <View
              key={index}
              style={{
                width: 8,
                aspectRatio: 1,
                borderRadius: 5,
                marginHorizontal: 2,
                backgroundColor:
                  activeIndex === index ? colors.blue : colors.lightGrey,
                opacity: activeIndex === index ? 1 : 0.5,
              }}
            />
          );
        })}
      </View>

      <View style={{ position: 'absolute', top: 20, right: 5 }}>
        {images.map((_, index) => {
          return (
            <>
              {activeIndex === index ? (
                <View
                  key={index}
                  style={{
                    backgroundColor: colors.grey,
                    padding: 3,
                    paddingHorizontal: 10,
                    borderRadius: 13,
                  }}
                >
                  <Text style={{ color: colors.white }}>
                    {index + 1}/{images.length}
                  </Text>
                </View>
              ) : (
                <View key={index} />
              )}
            </>
          );
        })}
      </View>
    </View>
  );
};

export default Carosel;
