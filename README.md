# react-native-demo


To run for dev in simulator run 
npm install

npx react-native run-android

To install on a real device for Android run 

npx react-native bundle \
--assets-dest ./android/app/src/main/res/ \
--entry-file index.js \
--bundle-output ./android/app/src/main/assets/index.android.bundle \
--platform android \
-dev false

then build debug apk with 

./gradlew assembleDebug
