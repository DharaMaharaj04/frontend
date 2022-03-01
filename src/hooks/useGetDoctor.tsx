import { useEffect, useState } from 'react';

import { IUser } from '../interfaces/user';
import axios from 'axios';

async function getDoctors() {
  const result = await axios.get(`https://webhooks.mongodb-realm.com/api/client/v2.0/app/application-1-yzlwd/service/doctorapi/incoming_webhook/webhook0`);
  console.log(result);
  return result.data as IUser[];
}

export function useGetDoctors(): IUser[] {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then((data) => {
      setDoctors(data);
    });
  }, []);

  return doctors;
}

export function useGetDoctor(name: string) {
  const [doctor, setDoctor] = useState(null);
  const doctors = useGetDoctors();

  useEffect(() => {
    if (doctors.length === 0) return;

    const newDoctor = doctors.find((doc) => doc.name === name);

    if (newDoctor === undefined) return;

    setDoctor(newDoctor);
  }, [name, doctors]);

  return { doctor };
}
