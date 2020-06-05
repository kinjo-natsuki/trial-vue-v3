# trial-vue-3v-2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### memo
## Vue CLIのインストール
```
yarn global add @vue/cli
```
## Vue Project作成
```
vue create trial-vue-v3
```
*Manually select featuresを選択し、vuexを必ず選択する。（他は好みで）
## Vue3系betaのプラグインをいれる
```
cd trial-vue-v3
vue add vue-next
```
*package.jsonでバージョンがインストールされていることを確認。
```
"vue": "^3.0.0-beta.1",
"vue-router": "^4.0.0-alpha.5",
"vuex": "^4.0.0-alpha.1"
```
`yern serve` でローカルで確認

