# 熊本県 新型コロナウイルス感染症対策サイト

![](https://github.com/codeforkumamoto/covid19/workflows/production%20deploy/badge.svg)

[![熊本県 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/5866690/76852713-42e2e700-688f-11ea-90f4-b8d06971e01a.png)](https://dev-covid19-kumamoto.netlify.com/)
<!--
### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md)
-->

## 公開期限について(重要!)
感染拡大状況により予告なく停止することもあります。随時Code for Kumamotoメンバーで継続か停止を議論して進めます。

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 本家東京サイトから派生したサイト

[Link先](./forkedSites.md)を御覧ください。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。  
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://stop-covid19-kumamoto.netlify.com/ が更新されます。[![Netlify Status](https://api.netlify.com/api/v1/badges/5c668027-b024-4369-892a-de25f52a5f51/deploy-status)](https://app.netlify.com/sites/stop-covid19-kumamoto/deploys)

`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-kumamoto.netlify.com/ が更新されます。[![Netlify Status](https://api.netlify.com/api/v1/badges/a2898428-a455-49c9-88a3-53b44a4eeab0/deploy-status)](https://app.netlify.com/sites/stg-covid19-kumamoto/deploys)

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-kumamoto.netlify.com/ が更新されます。
[![Netlify Status](https://api.netlify.com/api/v1/badges/34abbf2e-7216-4e28-9cfa-726b4980dc04/deploy-status)](https://app.netlify.com/sites/dev-covid19-kumamoto/deploys)
