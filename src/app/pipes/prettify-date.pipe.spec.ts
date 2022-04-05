import { PrettifyDatePipe } from './prettify-date.pipe';

describe('PrettifyDatePipe', () => {
  it('create an instance', () => {
    const pipe = new PrettifyDatePipe();
    expect(pipe).toBeTruthy();
  });
});
