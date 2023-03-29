# Kamuy-API / User

- [StepZen] をセットアップする
  - `Start for Free` からサインアップする(`GitHub`でサインアップも OK)
  - ログインする
  - [ダッシュボード](https://dashboard.stepzen.com/) を開く
- [Getting Started](https://dashboard.stepzen.com/getting-started) からエンドポイントを作成する
  - Step 1. `Select Backend` で `mongoDB` を選択する
  - Step 2. `Configuration` で `Provide credentials for your backend` を入力する
    ```text
    Data API App ID: data-gipvp
    Data API Key: xhbRDK7QxE6ye5JQiEt0WmHniR74qpWRNdmKLLwWYLHqJz5mdbDEASUeGV67rBOC
    Cluster Name: Cluster0
    Cluster Database: kamuy
    Cluster Collection: User
    ```
  - Step 3. `Setup StepZen` を実行する
    - Install the StepZen CLI(`$ npm install -g stepzen`)
    - Log in with your StepZen account(`$ stepzen login -a bonitasprings`)
      - Enter your Admin Key when prompted
        ```text
        bonitasprings::stepzen.io+1000::d2c4da772d6f08ca5e3f0318111de7aa207b4ef234db90bd24f2ca52db69ba28
        ```
  - Step 4. `Build your endpoint` を実行する
    - Initialize your project(`$ stepzen init --endpoint=api/getting-started`)
    - Import your backend
        ```text
        $ stepzen import curl  'https://data.mongodb-api.com/app/data-gipvp/endpoint/data/beta/action/find'
            --header 'Content-Type: application/json'
            --header 'Access-Control-Request-Headers: *'
            --header 'api-key: xhbRDK7QxE6ye5JQiEt0WmHniR74qpWRNdmKLLwWYLHqJz5mdbDEASUeGV67rBOC'
            --data-raw '{
                "collection":"User",
                "database":"kamuy",
                "dataSource":"Cluster0",
                "limit": 5
            }
        ```
    - Type stepzen start in your terminal(`$ stepzen start`)



[StepZen]: https://stepzen.com/
