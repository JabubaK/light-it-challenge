"use client";
import { useState } from "react";
import { Patient } from "@/types/patient";
import PatientList from "@/components/PatientList";
import Modal from "@/components/Modal";
import PatientForm from "@/components/PatientForm";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

interface PatientsClientProps {
  initialPatients: Patient[];
}

export default function PatientsClient({
  initialPatients,
}: PatientsClientProps) {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const openAddModal = () => {
    setModalMode("add");
    setSelectedPatient(null);
    setIsModalOpen(true);
  };

  const openEditModal = (patient: Patient) => {
    setModalMode("edit");
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData: Omit<Patient, "id" | "createdAt">) => {
    if (modalMode === "add") {
      const newPatient: Patient = {
        id: Math.random().toString(),
        createdAt: new Date(),
        ...formData,
      };
      setPatients((prev) => [newPatient, ...prev]);
      toast.success("New patient added.");
    } else {
      if (!selectedPatient) return;

      setPatients((prev) =>
        prev.map((p) =>
          p.id === selectedPatient.id
            ? {
                ...p,
                ...formData,
              }
            : p
        )
      );
      toast.success("Patient edited.");
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-600">
          Total Patients ({patients.length})
        </h1>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded flex items-center"
          onClick={openAddModal}
        >
          <Plus className="h-4 w-4 mr-2" /> Add Patient
        </button>
      </header>

      <PatientList patients={patients} onEdit={openEditModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PatientForm
          mode={modalMode}
          initialPatient={selectedPatient}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
}
