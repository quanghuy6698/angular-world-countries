import { ICurrency } from "./currency.model";
import { ILanguage } from "./language.model";
import { IRegionalBloc } from "./regional-bloc.model";
import { ITranslation } from "./translation.model";

export default interface ICountry {
  name?: string;
  topLevelDomain?: string[] | null;
  alpha2Code?: string | null;
  alpha3Code?: string | null;
  callingCodes?: string[] | null;
  capital?: string | null;
  altSpellings?: string[] | null;
  region?: string | null;
  subregion?: string | null;
  population?: number | null;
  latlng?: number[] | null;
  demonym?: string | null;
  area?: number | null;
  gini?: number | null;
  timezones?: string[] | null;
  borders?: string[] | null;
  nativeName?: string | null;
  numericCode?: string | null;
  currencies?: ICurrency[] | null;
  languages?: ILanguage[] | null;
  translations?: ITranslation | null;
  flag?: string | null;
  regionalBlocs?: IRegionalBloc[] | null;
  cioc?: string | null;
}
