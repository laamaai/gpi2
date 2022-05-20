apk: 
	cd webview-master && chmod a+x gradlew && ./gradlew assembleDebug
	cp webview-master/app/build/intermediates/apk/debug/app-debug.apk .

all:
	cd webview-master && chmod a+x gradlew && ./gradlew assembleDebug
	cp webview-master/app/build/intermediates/apk/debug/app-debug.apk .
