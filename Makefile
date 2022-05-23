all:
	$(MAKE) apk
	$(MAKE) easybuggy
apk: 
	cd webview-master && chmod a+x gradlew && ./gradlew assembleDebug
	cp webview-master/app/build/intermediates/apk/debug/app-debug.apk .

easybuggy: 
	sudo apt-get install maven
	cd easybuggy-master && mvn clean install

clean:
	rm app-debug.apk
