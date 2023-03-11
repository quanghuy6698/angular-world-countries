export interface IRegion {
  name?: string;
  code?: string;
  subregions?: { name: string; code: string }[];
}
