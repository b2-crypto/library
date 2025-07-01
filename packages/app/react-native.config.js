module.exports = {
  project: {
      ios:{
        sourceDir: "ios",
      },
      android:{},
  },
  dependencies: {
   ...(process.env.NO_FLIPPER ?
    { 'react-native-flipper': { platforms: { ios: null } } } :
    {}),
  },
  assets:['./src/assets/fonts/'],
}