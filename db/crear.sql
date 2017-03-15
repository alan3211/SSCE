CREATE DATABASE ssce_development;
CREATE DATABASE ssce_test;
CREATE DATABASE ssce_production;

GRANT ALL PRIVILEGES ON ssce_development.* TO 'root'@'localhost' IDENTIFIED BY 'pass';
GRANT ALL PRIVILEGES ON ssce_test.* TO 'root'@'localhost' IDENTIFIED BY 'pass';
GRANT ALL PRIVILEGES ON ssce_production.* TO 'root'@'localhost' IDENTIFIED BY 'pass';