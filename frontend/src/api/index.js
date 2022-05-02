import axios from 'axios';

const url = 'http://localhost:9000/patients';

export const fetchPatient = () => axios.get(url);
export const createPatient = (newPatient) => axios.post(url, newPatient);
export const deletePatient = (id) => axios.delete(`${url}/${id}`);
export const editPatient = (id, editPatient) => axios.patch(`${url}/${id}`, editPatient);

const a_url = 'http://localhost:9000/appointments';
export const fetchAppointment = () => axios.get(a_url);
export const deleteAppointment = (id) => axios.delete(`${a_url}/${id}`);
export const createAppointment = (newAppointment) => axios.post(a_url, newAppointment);
export const editAppointment = (id, editAppointment) => axios.patch(`${a_url}/${id}`, editAppointment);


