# Angela-mobile

Mobile app to use Angela, the secret message system

# dev

First of all install ionic
```shell
$ npm install -g cordova ionic
```
Use the latest version ([here](http://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version) the instructions for Ubuntu).

## End to end tests

To setup the dev environment for the test, follow the instructions [here](http://gonehybrid.com/how-to-write-automated-tests-for-your-ionic-app-part-2/) and [here](http://gonehybrid.com/how-to-write-automated-tests-for-your-ionic-app-part-3/).

To execute the tests the webserver must be running:
```shell
$ (cd AngelaApp; ionic serve --nobrowser &)  
$ (cd tests; protractor e2e-tests.conf.js)
```

## Build the app

You must have a keystore configured:
```shell
$ keytool -genkey -v -keystore Angela.keystore -alias Angela -keyalg RSA -keysize 2048 -validity 10000
```
Then create the file `./AngelaApp/platforms/android/ant.properties` with the following content:
```
key.store=Angela.keystore
key.alias=Angela
```

Finally you can build and distribute:
```shell
$ ionic build android --release
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore platforms/android/Angela.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk Angela
$ zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/Angela.apk
$ adb install platforms/android/build/outputs/apk/Angela.apk # installs on the connected phone
```
