export const fetcher = async (url: string): Promise<any> =>
  await fetch(url).then(async (r): Promise<any> => await r.json());
