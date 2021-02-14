# investment-support-for-nuxtjs

![logo](./brand/nextjs.jpg "ロゴ")

## 環境構築
ルートディレクトリに `.env.local` ファイルを作成し、下記をコピーペーストしてください

```.dotenv
NEXT_PUBLIC_WORJP_SERVICE_BASE_URL='https://assets.wor.jp/rss/rdf/'
NEXT_PUBLIC_COINTELEGRAPH_URL='https://jp.cointelegraph.com/'
NEXT_PUBLIC_YOUTUBE_API_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
NEXT_PUBLIC_API_PORT=4001
NEXT_PUBLIC_API_BASE_URL='http://localhost:4001/api/'
```

&nbsp;

`.env.local` を作成後にローカル環境を起動します

YouTubeの動画リストを表示するには`YouTube Data API`用のAPIキーが必要になります

```bash
yarn dev
```

&nbsp;

ブラウザを開いて `localhost:4001` へアクセスし、画面が表示されれば完了です
