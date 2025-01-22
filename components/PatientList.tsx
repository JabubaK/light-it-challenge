"use client";
import { Patient } from "@/types/patient";
import PatientCard from "./PatientCard";

interface PatientListProps {
  patients: Patient[];
  onEdit: (patient: Patient) => void;
}

export default function PatientList({ patients, onEdit }: PatientListProps) {
  return (
    <div className="flex flex-col space-y-2">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} onEdit={onEdit} />
      ))}
    </div>
  );
}
