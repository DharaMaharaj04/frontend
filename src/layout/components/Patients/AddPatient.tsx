import React, { useState } from 'react';
import { IPatient } from '../../../interfaces/patient';
import { Button, Modal } from 'antd';
import PatientForm from './PatientForm';

type DispatchProps = {
  onAddPatient?: (patient: IPatient) => void;
};

const AddPatient = ({ onAddPatient }: DispatchProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  const closeModal = () => setVisible(false);

  return (
    <div className='add-patient'>
      <Button type='primary' onClick={handleClick}>
        <span className='icofont icofont-plus mr-2' style={{ fontSize: '1.3em' }} />
        Add patient
      </Button>
      <Modal
        visible={visible}
        footer={null}
        onCancel={closeModal}
        title={<h3 className='title'>Add patient</h3>}
      >
        <PatientForm onCancel={closeModal} onAddPatient={console.log} />
      </Modal>
    </div>
  );
};

export default AddPatient;
