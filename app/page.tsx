import { getPatients } from "@/api/patient";
import AddButton from "@/components/AddButton";
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
      <PatientsClient initialPatients={initialPatients} />
    </section>
  );
}
