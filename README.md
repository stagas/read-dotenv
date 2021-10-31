# read-dotenv

read a .env file into an object

## Installation

```sh
$ npm install read-dotenv --save
```

## Usage

```js
import dotenv from 'read-dotenv'
```

## Example

```sh
# .env
PORT=7777
HOST=my.host.com
```

```js
// app.js
import dotenv from 'read-dotenv'

const env = dotenv({
  PORT: 3000,
  HOST: 'localhost',
  SOME: 'other option'
})

// `env` is now:
{
  PORT: 7777,
  HOST: 'my.host.com',
  SOME: 'other option',
}

```

## API

### ▸ **dotenv**(`env?`, `root?`): _`Record<string, any>`_

#### Parameters

| Name   | Type                  | Description                                            |
| :----- | :-------------------- | :----------------------------------------------------- |
| `env`  | `Record<string, any>` | The environment default object                         |
| `root` | `string`              | The path where `.env` lives (default: `process.cwd()`) |

## License

MIT
