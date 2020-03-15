import {
  parseMs
} from "./parseMs";

describe("parseMs", () => {
  it('should parse the MS value', () => {
    expect(parseMs(86400000)).toEqual({
      days: 1,
      hours: 24,
      minutes: 1440,
      seconds: 86400,
      milliseconds: 86400000,
      microseconds: 86400000000,
      nanoseconds: 86400000000000
    });
  });
});
