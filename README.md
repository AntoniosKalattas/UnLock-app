# UnLock-app

# requirments to build the app
  User variable:
 [x]ANDROID_HOME -> AppData\Local\Android\Sdk
 [x]ANT_HOME -> \apache_ant
 [x]GRADLE_HOME -> \Gradle\gradle-7.4\bin
 [x]JAVA_HOME -> \Program Files\Java\jre1.8.0_321
 
  System Variables:
  
 [x]'_JAVA_OPTIONS' -> -Xmx512M
 
  Path:
  
\AppData\Local\Android\Sdk\tools
\AppData\Local\Android\Sdk\tools\bin
\AppData\Local\Android\Sdk\platform-tools
%JAVA_HOME%
%ANT_HOME%
%ANDROID_HOME%
%GRADLE_HOME%

# How to build your app:
```
> cordova creat name_of_project
> cordova platform add android
> cordova run
> cordova emulate android 
```

How to check console or devtools:
got to > chrome://inspect/#devices
