"use client"; 
import { Patient } from "@/types/patient";
import PatientCard from "./PatientCard";

interface PatientListProps {
  patients: Patient[];
}

export default function PatientList({ patients }: PatientListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}
