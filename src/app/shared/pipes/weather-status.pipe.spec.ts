import { WeatherStatusPipe } from './weather-status.pipe';

describe('WeatherStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
