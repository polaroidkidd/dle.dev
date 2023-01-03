export type ILocation = {
  address?: string;
  countryCode?: string;
  region?: string;
};

export function Location({ address, countryCode, region }: ILocation) {
  return (
    <>
      <div>address: {address}</div>
      <div>countryCode: {countryCode}</div>
      <div>region: {region}</div>
    </>
  );
}
