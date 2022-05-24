SHELL := /bin/bash
export PATH := $(shell pwd)/sonar-scanner-cli-3.3.0.1492-linux/bin/:$(PATH)

wordpress:
	chmod a+x wordpress.sh
	sudo ./wordpress.sh

android:
	chmod a+x android.sh
	./android.sh

androidPruebas:
	chmod a+x ./scripts/androidPruebas.sh
	./scripts/androidPruebas.sh
	
start-sonarqube:
	sonarqube-7.8/bin/linux-x86-64/sonar.sh console
	
all:
	$(MAKE) apk
	$(MAKE) easybuggy

easybuggy: 
	sudo apt-get install maven
	cd easybuggy-master && mvn clean install
	
sonar:
	cd webview-master
	export PATH=bin:$$PATH && sonar-scanner -Dsonar.projectKey=webview -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle -X
	cd ..
	cd easybuggy-master

	mvn clean verify sonar:sonar \
	-Dsonar.projectKey=easybuggy \
	-Dsonar.host.url=http://localhost:9000 \
	-Dsonar.login=7b9ed1f9a559a1cab91efb4bdd15ec977d3d33d0
	

sonarqube:
	sonarqube-7.8/bin/linux-x86-64/sonar.sh console
	sonar-scanner -Dsonar.projectKey=gpi -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle -X	
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
