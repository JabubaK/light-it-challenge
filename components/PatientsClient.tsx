"use client";

import { useState } from "react";
import { Patient } from "@/types/patient";
import PatientList from "@/components/PatientList";

interface PatientsClientProps {
  initialPatients: Patient[];
}

export default function PatientsClient({
  initialPatients,
}: PatientsClientProps) {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  const handleAddPatient = () => {
    const newPatient: Patient = {
      id: Math.random().toString(),
      name: "Nuevo Paciente",
      avatar: "",
      createdAt: new Date(),
      description: "",
    };
    setPatients((previousPatients) => [...previousPatients, newPatient]);
  };

  const handleEditPatient = (id: string) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id
          ? { ...patient, name: "Paciente Editado" }
          : patient
      )
    );
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddPatient}
        >
          Agregar Paciente
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={() => handleEditPatient(patients[0]?.id || "")}
        >
          Editar el primer Paciente
        </button>
      </div>

      <PatientList patients={patients} />
    </div>
  );
}
