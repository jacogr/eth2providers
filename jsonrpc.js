// @flow

const { EventEmitter } = require('events');

/*:: import type { JsonRpcVersion, JsonRpcRequest, JsonRpcError, JsonRpcAsyncResponse, JsonRpcSubscriptionResponse, ProviderInterface, ProviderResultCallback } from './types' */

class JsonRpc extends EventEmitter {
  /*:: _id: number */

  constructor () {
    super();

    this._id = 0;
  }

  _encode (method/*: string */, params/*: Array<string> */)/*: { id: number, json: string } */ {
    const id/*: number */ = ++this._id;
    const json/*: string */ = JSON.stringify(({
      id,
      jsonrpc: '2.0',
      method,
      params
    }/*: JsonRpcRequest */));

    return {
      id,
      json
    };
  }

  _decode (data/*: string */)/*: JsonRpcAsyncResponse | JsonRpcSubscriptionResponse */ {
    return JSON.parse(data);
  }
}

module.exports = JsonRpc;
