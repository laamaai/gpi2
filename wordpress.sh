#!/bin/bash

if [ ! "$(ls -A /var/www/html)" ]; then
	echo "Wordpress is not installed, you must install wordpress first";
	exit 1;
fi;
echo "Compiling wordpress...";
sleep 0.5;
cd /var/www/html;
cat <<EOF > create-phar.php
<?php
try {
	\$pharFile = 'wordpress.phar';
	if (file_exists(\$pharFile)) {
		unlink(\$pharFile);
	}
	if (file_exists(\$pharFile . '.gz')) {
		unlink(\$pharFile . '.gz');
	}
	\$phar = new Phar(\$pharFile);
	\$phar->startBuffering();
	\$defaultStub = \$phar->createDefaultStub('index.php');
	\$phar->buildFromDirectory(__DIR__ . '/');
	\$stub = "#!/usr/bin/env php \n" . \$defaultStub;
	\$phar->setStub(\$stub);
	\$phar->stopBuffering();
	\$phar->compressFiles(Phar::GZ);
	chmod(__DIR__ . '/wordpress.phar', 0775);
	echo "\$pharFile successfully created" . PHP_EOL;
} catch (Exception \$e) {
	echo \$e->getMessage();
}
?>
EOF
ulimit -n 4096;
php --define phar.readonly=0 create-phar.php;
rm create-phar.php;
#echo "Saved in ${PWD}/wordpress.phar";    
sleep 0.5;

cp ${PWD}/wordpress.phar /home/alumno/Escritorio/gpi2/
echo "Saved in /home/alumno/Escritorio/gpi2/wordpress.phar";    
