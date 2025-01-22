"use client";
import { FormEvent, useState, useEffect } from "react";
import { Patient } from "@/types/patient";

interface PatientFormProps {
  mode: "add" | "edit";
  initialPatient: Patient | null; 
  onSubmit: (data: Omit<Patient, "id" | "createdAt">) => void;
}

export default function PatientForm({
  mode,
  initialPatient,
  onSubmit,
}: PatientFormProps) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialPatient) {
      setName(initialPatient.name);
      setAvatar(initialPatient.avatar);
      setDescription(initialPatient.description);
    } else {
      setName("");
      setAvatar("");
      setDescription("");
    }
  }, [initialPatient]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      avatar,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold mb-2">
        {mode === "add" ? "Agregar Paciente" : "Editar Paciente"}
      </h2>

      <label>
        Nombre:
        <input
          type="text"
          className="border p-1 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Avatar (URL):
        <input
          type="url"
          className="border p-1 w-full"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>

      <label>
        Descripción:
        <textarea
          className="border p-1 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded">
        {mode === "add" ? "Agregar" : "Guardar Cambios"}
      </button>
    </form>
  );
}
