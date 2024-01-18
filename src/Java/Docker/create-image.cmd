docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kofeavtomat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kofeavtomat-java/app ../../..
