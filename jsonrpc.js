// @flow

const { EventEmitter } = require('events');

/*:: import type { JsonRpcVersion, JsonRpcRequest, JsonRpcError, JsonRpcAsyncResponse, JsonRpcSubscriptionResponse, ParamsType, ProviderInterface, ProviderResultCallback } from './types' */

/*:: type EncodeResultType = {
  id: number,
  json: string
} */

class JsonRpc extends EventEmitter {
  /*:: _id: number */

  constructor () {
    super();

    this._id = 0;
  }

  _encode (method/*: string */, params/*: ParamsType */)/*: EncodeResultType */ {
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
