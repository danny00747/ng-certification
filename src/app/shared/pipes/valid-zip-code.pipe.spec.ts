import { ValidZipCodePipe } from './valid-zip-code.pipe';

describe('ValidZipCodePipe', () => {
  it('create an instance', () => {
    const pipe = new ValidZipCodePipe();
    expect(pipe).toBeTruthy();
  });
});
