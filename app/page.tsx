import { getPatients } from "@/api/patient";
import PatientsClient from "@/components/PatientsClient";
import { Patient } from "@/types/patient";
import toast from "react-hot-toast";

export default async function Home() {
  let initialPatients: Patient[] = [];

  try {
    initialPatients = await getPatients();
  } catch (error) {
    toast.error("Something went wrong fetching patients.");
  }

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Pacientes</h1>
      <PatientsClient initialPatients={initialPatients} />
    </section>
  );
}
