import { ChatSocketModule } from './chat-socket.module';

describe('ChatSocketModule', () => {
  let chatSocketModule: ChatSocketModule;

  beforeEach(() => {
    chatSocketModule = new ChatSocketModule();
  });

  it('should create an instance', () => {
    expect(chatSocketModule).toBeTruthy();
  });
});
