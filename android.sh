#!/bin/bash
#Entramos en el proyecto android, se le da permisos al gradlew y se genera la apk
cd webview-master && chmod a+x gradlew && ./gradlew assembleDebug
#Movemos la apk de carpeta para ver que realmente el apk se ha creado
cp webview-master/app/build/intermediates/apk/debug/app-debug.apk .
