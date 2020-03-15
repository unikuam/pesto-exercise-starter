import {
  bouncer
} from "./bouncer";

describe("bouncer", () => {
  it('should remove falsy values', () => {
    expect(bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
    expect(bouncer([7, "undefined", "", false, null])).toEqual([7, "undefined"]);
    expect(bouncer([7, undefined, "", false, null, " ", 0])).toEqual([7, " "]);
  });
});
