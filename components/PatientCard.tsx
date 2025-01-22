"use client";

import { Patient } from "@/types/patient";
import Image from "next/image";

interface PatientCardProps {
  patient: Patient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-lg font-bold">{patient.name}</h2>
    </div>
  );
}
