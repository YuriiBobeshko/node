import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users.service';

@WebSocketGateway({ cors: '*' })
export class UsersGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private readonly server: Server;

  constructor(private readonly usersService: UsersService) {}

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, payload: string): Promise<void> {
    const res = await this.usersService.getAutoSuggestUsers(payload, 10);

    this.server.emit('msgToClient', JSON.stringify(res));
  }

  afterInit(server: Server) {
    console.info('Init');
  }

  handleDisconnect(client: Socket) {
    console.info(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.info(`Client connected: ${client.id}`);
  }
}
