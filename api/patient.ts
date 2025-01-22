import axios from "axios";
import { Patient } from "@/types/patient";

const API_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

export async function getPatients(): Promise<Patient[]> {
  const response = await axios.get<Patient[]>(API_URL);
  return response.data;
}
