import { Platform, StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window')

export default {

  WHITE: '#FFFFFF',
  BLACK: '#000000',
  LIGHT_GRAY: '#CCCCCC',
  DARK_GRAY: '#E4E4E4',
  BACKGROUND_COLOR: '#E0E0E0',

  TEXT_DARK: '#121212',
  TEXT_LIGHT: '#999999',

  FONT_REGULAR: 'gill-reg',
  FONT_BOLD: 'gill-semibold'

};

export function wp (percentage) {
  const value = (percentage * width) / 100
  return Math.round(value);
}
export function hp (percentage) {
  const value = (percentage * height) / 100
  return Math.round(value);
}