SHELL := /bin/bash

all:
	$(MAKE) apk
	$(MAKE) easybuggy
apk: 
	cd webview-master && chmod a+x gradlew && ./gradlew assembleDebug
	cp webview-master/app/build/intermediates/apk/debug/app-debug.apk .

easybuggy: 
	sudo apt-get install maven
	cd easybuggy-master && mvn clean install

sonarpath:
	export PATH=$$PATH:$(shell pwd)/sonar-scanner-cli-3.3.0.1492-linux/bin/
	
sonarqube:
	sonarqube-7.8/bin/linux-x86-64/sonar.sh console
	sonar-scanner -Dsonar.projectKey= -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle -X	
sonarqube-descarga:
	wget http://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-7.8.zip
	unzip sonarqube-7.8.zip
	rm sonarqube-7.8.zip
	https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-3.3.0.1492-linux.zip
	unzip sonar-scanner-cli-3.3.0.1492-linux.zip
	rm sonar-scanner-cli-3.3.0.1492-linux.zip

jenkins:
	sudo apt update
	wget https://pkg.jenkins.io/debian-stable/jenkins.io.key 
	sudo apt-key add jenkins.io.key 
	echo "deb https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list
	sudo apt update
	sudo apt install jenkins
	sudo systemctl start jenkins
	sudo systemctl status jenkins
	sudo cat /var/lib/jenkins/secrets/initialAdminPassword
	
clean:
	rm app-debug.apk
