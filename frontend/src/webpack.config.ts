import webpack from 'webpack';
// ... other imports

const config: webpack.Configuration = {
  // ... other webpack config settings

  plugins: [
    // ... other plugins

    // Use the EnvironmentPlugin
    new webpack.EnvironmentPlugin({'REACT_APP_BACKEND_URL': 'http://localhost:3001'})
  ],

  // ... rest of the webpack config
};

export default config;
