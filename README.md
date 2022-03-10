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


got to > chrome://inspect/#devices , for devtools
