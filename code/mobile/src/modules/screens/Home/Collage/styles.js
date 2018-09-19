// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { secondary, white, grey } from '../../../../ui/common/colors'
import {
  blockMargin,
  blockPadding,
  blockPaddingHalf,
  deviceHeight,
  deviceWidth,
  font
} from '../../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    backgroundColor: white,
    elevation: 2,
    marginBottom: blockMargin
  },
  imagesContainer: {
    flexDirection: 'row'
  },
  imagesSplitContainer: {
    flexDirection: 'column'
  },
  imageLong: {
    width: deviceWidth / 2,
    height: deviceHeight
  },
  imageSplit: {
    width: deviceWidth / 3,
    height: deviceHeight / 3
  },
  titleContainer: {
    backgroundColor: grey,
    padding: blockPaddingHalf
  },
  title: {
    color: secondary,
    fontSize: font(22),
    textAlign: 'center'
  },
  content: {
    padding: blockPadding,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: font(16),
    marginBottom: blockMargin,
    textAlign: 'center'
  }
})