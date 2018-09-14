import { Chat2Module } from './chat2.module';

describe('Chat2Module', () => {
  let chat2Module: Chat2Module;

  beforeEach(() => {
    chat2Module = new Chat2Module();
  });

  it('should create an instance', () => {
    expect(chat2Module).toBeTruthy();
  });
});
