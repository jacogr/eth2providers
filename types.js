// @flow

/*:: export type ProviderResultCallback = (error: ?Error, result?: string) => void */
/*:: export type ProviderSubscribeCallback = (error: ?Error, result?: string | { [string]: any }) => void */

/*:: export interface ProviderInterface {
  +send: (method: string, params: Array<string>, callback: ProviderResultCallback) => number,
  +sendPromise: (method: string, params: Array<string>) => Promise<string>,
  +subscribe: (method: string, params: Array<string>, callback: ProviderSubscribeCallback) => Promise<string>
} */

/*:: export type JsonRpcVersion = '2.0' */

/*:: export type JsonRpcRequest = {
  id: number,
  jsonrpc: JsonRpcVersion,
  method: string,
  params: Array<string>
} */

/*:: export type JsonRpcError = {
  code: number,
  message: string
} */

/*:: type JsonRpcBaseResponse = {
  error: ?JsonRpcError,
  id: number,
  jsonrpc: JsonRpcVersion
} */

/*:: export type JsonRpcAsyncResponse = JsonRpcBaseResponse & {
  result: string
} */

/*:: export type JsonRpcSubscriptionResponse = JsonRpcBaseResponse & {
  method: string,
  params: {
    result: {
      [string]: any
    },
    subscription: string
  },
} */
