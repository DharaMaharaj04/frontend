import { IPageData } from './page-data';
import { IAppSettings } from './settings';
import { IPatient } from './patient';

export interface IAppState {
  pageData: IPageData;
  settings: IAppSettings,
  patients: IPatient[]
}
