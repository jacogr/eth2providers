// @flow

declare type WebSocketMessage = {
  type: string,
  utf8Data: string
}

declare type WebSocketErrorCallback = (error: Error) => void;
declare type WebSocketMessageCallback = (message: WebSocketMessage) => void;

declare type WebSocketCallback = WebSocketErrorCallback | WebSocketMessageCallback;

declare type WebSocketConnection = {
  on: (type: string, callback: WebSocketCallback) => void;
  sendUTF: (message: string) => void;
}

declare type WebSocketCloseCallback = () => void;
declare type WebSocketConnectCallback = (connection: WebSocketConnection) => void;

declare type WebSocketHandler = WebSocketCloseCallback | WebSocketConnectCallback | WebSocketErrorCallback;

declare class WebSocketClient {
  constructor: () => WebSocketClient;
  connect: (url: string, types: Array<string>) => void;
  on: (type: string, callback: WebSocketHandler) => void;
}

declare module 'websocket' {
  declare module.exports: {
    client: typeof WebSocketClient
  }
}
