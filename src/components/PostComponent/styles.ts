import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
import fonts from "../../assets/theme/fonts";

const styles = StyleSheet.create({
    Header: { flexDirection: 'row', alignItems: 'center', padding: 10 },
    userProfilePic: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 0.5,
      borderColor: colors.lightGrey,
      marginRight: 10,
    },
    username: {
      color: colors.black,
      fontWeight: fonts.weight.bold,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      marginTop: 10,
    },
    footer: {
      padding: 10,
    },
    footericons: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    icons: { marginHorizontal: 5 },
    text: { color: colors.black, lineHeight: 20 },
    bold: { color: colors.black, fontWeight: fonts.weight.bold },
    comment: { flexDirection: 'row', alignItems: 'center' },
    commentUserName: { flexDirection: 'row', marginHorizontal: 5 },
    commentText: { color: colors.black, lineHeight: 18, flex: 1 },
  });

  export default styles;