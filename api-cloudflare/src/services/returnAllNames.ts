export const returnAllNames = (): Promise<string[]> =>
  ufla.get('names', { type: 'json' });
