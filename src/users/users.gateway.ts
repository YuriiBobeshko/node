import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

// @WebSocketGateway({
//   cors: {
//     origin: '*',
//   },
//   path: '/UsersGateway',
// })
// export class UsersGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer() server: Server;
//   private logger: Logger = new Logger('AppGateway');
//
//   @SubscribeMessage('msgToServer')
//   handleMessage(client: Socket, payload: string): void {
//     console.log(54646);
//
//     this.server.emit('msgToClient', payload);
//   }
//
//   afterInit(server: Server) {
//     console.log(54646);
//     this.logger.log('Init');
//   }
//
//   handleDisconnect(client: Socket) {
//     this.logger.log(`Client disconnected: ${client.id}`);
//   }
//
//   handleConnection(client: Socket, ...args: any[]) {
//     this.logger.log(`Client connected: ${client.id}`);
//   }
// }

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  path: '/',
  // transport: ['websocket'],
})
export class UsersGateway {
  @WebSocketServer()
  private readonly server;

  @SubscribeMessage('connect')
  handleInit(@MessageBody() message: string): void {
    console.log(111, message);
    this.server.emit('message', message);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(111, message);
    this.server.emit('message', message);
  }

  @SubscribeMessage('event')
  onEvent(@MessageBody() message: string): void {
    console.log(111, message);
    this.server.emit('message', message);
  }

  @SubscribeMessage('event')
  handleError(...rest): void {
    console.log(rest);
    // this.server.emit('message', message);
  }
}
