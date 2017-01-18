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
