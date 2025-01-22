"use client";
import { Patient } from "@/types/patient";
import Image from "next/image";

interface PatientCardProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
}

export default function PatientCard({ patient, onEdit }: PatientCardProps) {
  return (
    <div className="border rounded p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Image
        width={5}
        height={5}
          src={patient.avatar}
          alt={`${patient.name} avatar`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{patient.name}</h3>
          <p className="text-sm text-gray-500">
            Creado:{" "}
            {patient.createdAt instanceof Date
              ? patient.createdAt.toLocaleDateString()
              : String(patient.createdAt)}
          </p>
        </div>
      </div>

      <div className="mt-2">
        <p className="whitespace-pre-line">{patient.description}</p>
      </div>

      <button
        className="bg-orange-500 text-white px-2 py-1 rounded mt-4"
        onClick={() => onEdit(patient)}
      >
        Editar
      </button>
    </div>
  );
}
