import React, { useEffect } from "react"
import { StyleSheet, StyleProp } from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";
import { DEFAULT_IMAGE } from "../../../assests";
import { validateAndConfigureURL } from "../../../utility/helper";

interface IImageComponent {
    image?: string ,
    imageMode?: 'contain' | 'cover' | 'stretch' | 'center',
    style?: StyleProp<ImageStyle>,
    testID?: string,
}

/**
 * React component that renders an image using the `FastImage`
 * library, with customizable image mode, style, and test ID.
 * @param {IImageComponent}  - - `image`: The URL of the image to be displayed.
 * @returns The `Image` component is being returned.
 */
export const Image = ({image, imageMode = "cover", style, testID="image-component"}: IImageComponent) => {
    const containerStyle = [styles.container, style];
    return (
        <FastImage
          testID={testID}
          style={containerStyle}
          resizeMode={imageMode}
          fallback={true}
          source={{
            uri: validateAndConfigureURL(image),
            priority: FastImage.priority.high,
          }}
          defaultSource={DEFAULT_IMAGE}
        />
      );

}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
  });
