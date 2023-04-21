# react-native-demo


To run for dev in simulator run 
npm install

npx react-native run-android

To install on a real device for Android run 

npx react-native bundle \
--platform android \
--dev false \
--entry-file index.js \
--bundle-output android/app/src/main/assets/index.android.bundle

then build debug apk with 

./gradlew assembleDebug
