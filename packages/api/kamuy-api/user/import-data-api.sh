#!/bin/sh

#APIS="findOne find insertOne insertMany updateOne updateMany replaceOne deleteOne deleteMany aggregate"
APIS="findOne"

BASE_URL=https://ap-southeast-1.aws.data.mongodb-api.com/app/data-gipvp/endpoint/data/v1
API_KEY=xhbRDK7QxE6ye5JQiEt0WmHniR74qpWRNdmKLLwWYLHqJz5mdbDEASUeGV67rBOC
COLLECTION=User
DATABASE=kamuy
DATA_SOURCE=Cluster0
LIMIT=5

for API in $APIS;
do
    stepzen import \
        curl "${BASE_URL}/action/${API}" \
            --header 'Content-Type: application/json' \
            --header 'Access-Control-Request-Headers: *' \
            --header "api-key: ${API_KEY}" \
            --data-raw "{
                \"collection\":\"${COLLECTION}\",
                \"database\":\"${DATABASE}\",
                \"dataSource\":\"${DATA_SOURCE}\",
                \"limit\":${LIMIT} }"
done