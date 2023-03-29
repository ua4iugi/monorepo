# Kamuy-API / User

- エンドポイントをビルドする
  - プロジェクトを初期化する(`$ stepzen init --endpoint=api/kamuy-user`)
  - バックエンドをインポートする
    - [Data API Resources](https://www.mongodb.com/docs/atlas/api/data-api-resources/)
      - Find a Single Document(`POST /action/findOne`)
      - Find Multiple Documents(`POST /action/find`)
      - Insert a Single Document(`POST /action/insertOne`)
      - Insert Multiple Documents(`POST /action/insertMany`)
      - Update a Single Document(`POST /action/updateOne`)
      - Update Multiple Documents(`POST /action/updateMany`)
      - Replace a Single Document(`POST /action/replaceOne`)
      - Delete a Single Document(`POST /action/deleteOne`)
      - Delete Multiple Documents(`POST /action/deleteMany`)
      - Run an Aggregation Pipeline(`POST /action/aggregate`)
    ```text
    $ stepzen import \
        curl 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-gipvp/endpoint/data/v1/action/find' \
          --header 'Content-Type: application/json' \
          --header 'Access-Control-Request-Headers: *' \
          --header 'api-key: xhbRDK7QxE6ye5JQiEt0WmHniR74qpWRNdmKLLwWYLHqJz5mdbDEASUeGV67rBOC' \
          --data-raw '{
            "collection":"User",
            "database":"kamuy",
            "dataSource":"Cluster0",
            "limit": 5 }'
    ```
  - ターミナルから `StepZen` を開始する(`$ stepzen start`)
    - [GraphiQL](https://dashboard.stepzen.com/explorer?endpoint=api/kamuy-user) を開く
      - `Pretty query` をクリック
      - `Variables` へ以下を入力する
        ```text
        {
          "collection": "User",
          "database": "kamuy",
          "dataSource": "Cluster0",
          "limit": 5
        }
        ```
      - `Execute query (Ctrl-Enter)` をクリック
      - クエリ結果を確認する
      - `Connect` から `JavaScript` - `Fetch` を選択し、サンプルコードを参照する

[StepZen]: https://stepzen.com/
