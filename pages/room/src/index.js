import { constants } from '../../_shared/constants.js';
import SocketBuilder from '../../_shared/sockerBuilder.js';

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces,
});

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected!', user))
  .setOnUserDisconnected((user) => console.log('user disconnected!', user))
  .build();

const room = {
  id: Data.now(),
  topic: 'Js Expert',
};

const user = {
  img: 'https://www.iconfinder.com/icons/4043234/animal_avatar_bear_russian_icon',
  username: 'Fransisco de Assis',
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
