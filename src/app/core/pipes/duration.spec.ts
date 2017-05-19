import { DurationPipe } from './duration';

describe('Duration pipe', () => {
  let pipe = new DurationPipe();

  it('should return empty string for undefined/null duration', () => {
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });

  it('should return duration in "Xh Ymin" form', () => {
    expect(pipe.transform(1)).toBe('1min');
    expect(pipe.transform(59)).toBe('59min');

    expect(pipe.transform(60)).toBe('1h 0min');
    expect(pipe.transform(61)).toBe('1h 1min');

    expect(pipe.transform(335)).toBe('5h 35min');
  });
});
