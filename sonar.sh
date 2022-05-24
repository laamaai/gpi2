#!/bin/bash
cd webview-master
export PATH=$PATH:/home/alumno/Escritorio/gpi2/sonar-scanner-3.3.0.1492-linux/bin/
sonar-scanner -Dsonar.projectKey=webview -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.java.binaries=gradle -X

cd ..
cd easybuggy-master
export PATH=$PATH:/home/alumno/Escritorio/gpi2/sonar-scanner-3.3.0.1492-linux/bin/

mvn clean verify sonar:sonar \
  -Dsonar.projectKey=easybuggy \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=7b9ed1f9a559a1cab91efb4bdd15ec977d3d33d0
