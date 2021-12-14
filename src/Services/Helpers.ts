let percentToHex: Function = (p: number): string =>
  Math.round(p * 255).toString(16);

export { percentToHex };
