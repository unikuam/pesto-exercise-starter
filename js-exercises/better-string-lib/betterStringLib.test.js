import { BetterStringLib } from './betterStringLib';
var betterStringLib = new BetterStringLib;
describe('better string lib', () => {
  test('reverse tests', () => {
    expect(betterStringLib.reverse('ab')).toBe('ba');
    expect(betterStringLib.reverse('foo 𝌆 bar')).toBe('rab 𝌆 oof');
    // expect(betterStringLib.reverse('mañana mañana')).toBe('anañam anañam');
  });

  test('equal tests', () => {
    expect(betterStringLib.equal('a', 'a')).toBe(true);
    expect(betterStringLib.equal('mañana', 'mañana')).toBe(true);
    expect(betterStringLib.equal('mañana', 'mañana')).toBe(true);
  });
});
