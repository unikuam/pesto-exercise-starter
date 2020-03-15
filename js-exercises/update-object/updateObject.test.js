import { updateObject } from "./updateObject";

describe("updateObject", () => {
  it('should replace the given characters at given position in an array', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
    expect(updateObject(-1, '_', ['a', 'b'])).toEqual(['a', '_']);
    expect(updateObject(4, 'hello', ['a', 'b', 'c', 'e', 'k'])).toEqual(['a', 'b', 'c', 'e', 'hello']);
    expect(updateObject(3, '_', ['a', 'b'])).toEqual(['a', 'b']);
    expect(updateObject(-3, '_', ['a', 'b', 'c'])).toEqual(['_', 'b', 'c']);
    expect(updateObject(-3, '_', ['b', 'c'])).toEqual(['b', 'c']);
  });
});
