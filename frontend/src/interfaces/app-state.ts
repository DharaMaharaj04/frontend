import { IPageData } from './page';
import { IAppSettings } from './settings';
import { IPatient } from './patient';
import { IAppointment } from './patient';

export interface IAppState {
  pageData: IPageData;
  settings: IAppSettings,
  patients: IPatient[],
  appointments: IAppointment[]
}
