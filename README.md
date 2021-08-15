# SKYS CLIENT

## 開発環境構築

kubernetesを使わない場合はルートに`.env`ファイルを作成し、下記をコピーペーストする

```
# nodejs env
NODE_ENV=development

# nextjs public env
NEXT_PUBLIC_LOCAL_API_BASE_URL=http://localhost:3000/v1/
```

## コーディング規約

`pages` → `Driver` → `Adapter` → `Core/UseCase` → `Core/Entity` の依存関係を厳守する