# investment-support-for-nuxtjs

![logo](./brand/nextjs.jpg "ロゴ")

## 環境構築
ルートディレクトリに `.env.local` ファイルを作成し、下記をコピーペーストしてください

```.dotenv
NEXT_PUBLIC_RSS_SERVICE_BASE_URL='https://assets.wor.jp/rss/rdf/'
NEXT_PUBLIC_COINTELEGRAPH_URL='https://jp.cointelegraph.com/rss'
NEXT_PUBLIC_YOUTUBE_URL=''
NEXT_PUBLIC_API_BASE_URL='http://localhost:3000/api/'
```

&nbsp;

`.env.local` を作成後にローカル環境を起動します

```bash
yarn dev
```

&nbsp;

ブラウザを開いて `localhost:3000` へアクセスし、画面が表示されれば完了です
