// @flow

/*:: export type ProviderResultCallback = (error: ?Error, result?: any) => void */

/*:: export interface ProviderInterface {
  +send: (method: string, params: Array<boolean | number | string>, callback: ProviderResultCallback) => number,
  +sendPromise: (method: string, params: Array<boolean | number | string>) => Promise<string>,
  +subscribe: (method: string, params: Array<boolean | number | string>, callback: ProviderResultCallback) => Promise<string>
} */

/*:: export type JsonRpcVersion = '2.0' */

/*:: export type JsonRpcRequest = {
  id: number,
  jsonrpc: JsonRpcVersion,
  method: string,
  params: Array<boolean | number | string>
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
  result: any
} */

/*:: export type JsonRpcSubscriptionResponse = JsonRpcBaseResponse & {
  method: string,
  params: {
    result: any,
    subscription: string
  },
} */
