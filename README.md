[![test](https://github.com/ks6088ts-labs/react-ts/workflows/test/badge.svg)](https://github.com/ks6088ts-labs/react-ts/actions/workflows/test.yml)

# Notes

## Test API Call feature locally

```shell
# run json server for local test
npx json-server --watch assets/auth.json

# check json data
curl http://localhost:3000/items | jq -r .
```
