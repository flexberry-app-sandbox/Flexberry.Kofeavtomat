docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kofeavtomat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kofeavtomat/app ../..
