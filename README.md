# UnLock-app

# requirments 
  User variable:
 - ANDROID_HOME -> AppData\Local\Android\Sdk
 - ANT_HOME -> \apache_ant
 - GRADLE_HOME -> \Gradle\gradle-7.4\bin
 - JAVA_HOME -> \Program Files\Java\jre1.8.0_321
 
  System Variables:
  
 - _JAVA_OPTIONS -> -Xmx512M
 
  Path:
  
- \AppData\Local\Android\Sdk\tools
- \AppData\Local\Android\Sdk\tools\bin
- \AppData\Local\Android\Sdk\platform-tools
- %JAVA_HOME%
- %ANT_HOME%
- %ANDROID_HOME%
- %GRADLE_HOME%

# How to build your app:
```
> cordova creat name_of_project
> cordova platform add android
> cordova run
> cordova emulate android 
```

# Bugs
> POST https://localhost:83/android_app/login.php net::ERR_CONNECTION_REFUSED
> Failed to load resource: net::ERR_CONNECTION_REFUSED

got to > chrome://inspect/#devices , for devtools
