#!/bin/bash

source /home/dle/.envs/.dle.dev.sh

docker exec -t strapi-db pg_dumpall --clean -U "${STRAPI_POSTGRES_USER}" > ./init.sql
wait
sed -i 's/DROP DATABASE/DROP DATABASE IF EXISTS/' ./init.sql
sed -i 's/DROP ROLE "db-strapi-admin";//' ./init.sql
sed -i 's/DROP ROLE postgres;//' ./init.sql
sed -i 's/CREATE ROLE postgres;//' ./init.sql
