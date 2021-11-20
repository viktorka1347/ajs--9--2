import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../app';

test('Данные должны преобразовываться в строку', () => {
  const abConverter = new ArrayBufferConverter();
  abConverter.load(getBuffer());
  expect(abConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});