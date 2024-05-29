import React, { useState } from 'react';
import '../styles/PatientInterface.css';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      Disease: 'Headache',
      Treatments: 'Painkillers',
      Dosage: '2 tablets',
      frequency: 'Twice daily',
      RemainingQuantity: '20 tablets'
    },
    {
      Disease: 'Flu',
      Treatments: 'Antibiotics',
      Dosage: '1 tablet',
      frequency: 'Once daily',
      RemainingQuantity: '15 tablets'
    },
    {
      Disease: 'Allergies',
      Treatments: 'Antihistamines',
      Dosage: '1 tablet',
      frequency: 'As needed',
      RemainingQuantity: '30 tablets'
    }
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedPrescription, setEditedPrescription] = useState({
    Disease: '',
    Treatments: '',
    Dosage: '',
    frequency: '',
    RemainingQuantity: ''
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedPrescription(prescriptions[index]);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedPrescription({
      Disease: '',
      Treatments: '',
      Dosage: '',
      frequency: '',
      RemainingQuantity: ''
    });
  };

  const handleUpdate = (index) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions[index] = editedPrescription;
    setPrescriptions(updatedPrescriptions);
    setEditIndex(null);
    setEditedPrescription({
      Disease: '',
      Treatments: '',
      Dosage: '',
      frequency: '',
      RemainingQuantity: ''
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPrescription({ ...editedPrescription, [name]: value });
  };

  const handleDelete = (index) => {
    const updatedPrescriptions = prescriptions.filter((_, i) => i !== index);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <div className="PPre-prescriptions-container">
      <h2 className="PPre-heading">Prescriptions</h2>
      {prescriptions.map((prescription, index) => (
        <div key={index} className="PPre-prescription-item">
          {editIndex === index ? (
            <div className="PPre-edit-form">
              <input
                type="text"
                name="Disease"
                value={editedPrescription.Disease}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="Treatments"
                value={editedPrescription.Treatments}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="Dosage"
                value={editedPrescription.Dosage}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="frequency"
                value={editedPrescription.frequency}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="RemainingQuantity"
                value={editedPrescription.RemainingQuantity}
                onChange={handleInputChange}
              />
              <div className="PPre-edit-buttons">
                <button onClick={() => handleUpdate(index)} className="PPre-update-button">Update</button>
                <button onClick={handleCancelEdit} className="PPre-cancel-button">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="PPre-prescription-details">
              <p><strong>Disease:</strong> {prescription.Disease}</p>
              <p><strong>Treatment:</strong> {prescription.Treatments}</p>
              <p><strong>Dosage:</strong> {prescription.Dosage}</p>
              <p><strong>Frequency:</strong> {prescription.frequency}</p>
              <p><strong>Remaining Quantity:</strong> {prescription.RemainingQuantity}</p>
              <div className="PPre-edit-buttons">
                <button onClick={() => handleEdit(index)} className="PPre-edit-button">Edit</button>
                <button onClick={() => handleDelete(index)} className="PPre-delete-button">Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <PrescriptionForm setPrescriptions={setPrescriptions} />
    </div>
  );
};

const PrescriptionForm = ({ setPrescriptions }) => {
  const [newPrescription, setNewPrescription] = useState({
    Disease: '',
    Treatments: '',
    Dosage: '',
    frequency: '',
    RemainingQuantity: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPrescription({ ...newPrescription, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrescriptions((prevPrescriptions) => [...prevPrescriptions, newPrescription]);
    setNewPrescription({
      Disease: '',
      Treatments: '',
      Dosage: '',
      frequency: '',
      RemainingQuantity: ''
    });
  };

  return (
    <div className="PPre-prescription-form">
      <h3>Add New Prescription</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Disease" placeholder="Disease" value={newPrescription.Disease} onChange={handleInputChange} required />
        <input type="text" name="Treatments" placeholder="Treatments" value={newPrescription.Treatments} onChange={handleInputChange} required />
        <input type="text" name="Dosage" placeholder="Dosage" value={newPrescription.Dosage} onChange={handleInputChange} required />
        <input type="text" name="frequency" placeholder="Frequency" value={newPrescription.frequency} onChange={handleInputChange} required />
        <input type="text" name="RemainingQuantity" placeholder="Remaining Quantity" value={newPrescription.RemainingQuantity} onChange={handleInputChange} required />
        <button type="submit" className="PPre-add-button">Add Prescription</button>
      </form>
    </div>
  );
};

export default Prescriptions;
