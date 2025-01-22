"use client";
import { Patient } from "@/types/patient";
import {
  ChevronUpCircle,
  CircleChevronDown,
  Pen,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";

interface PatientCardProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
}

export default function PatientCard({ patient, onEdit }: PatientCardProps) {
  const [expandedDetails, setExpandedDetails] = useState(false);
  const defaultUserAvatar = "/defaultUser.jpg";
  const [useImg, setImg] = useState(patient.avatar);
  const handelImgError = () => {
    setImg(defaultUserAvatar);
  };
  return (
    <div className=" rounded-xl px-6 py-2 shadow-md bg-white">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <Image
            width={50}
            height={50}
            src={useImg || defaultUserAvatar}
            alt={`patient avatar`}
            className=" w-10 h-10 rounded-full object-cover items-center text-xs"
            onError={handelImgError}
          />
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="font-semibold">{patient.name}</h3>
              <div className="text-xs text-gray-500 flex space-x-2">
                <p>Created at</p>
                <span>
                {format(new Date(patient.createdAt), "dd-MMM-yyyy")}
                </span>
              </div>
              <button
                onClick={() => setExpandedDetails(!expandedDetails)}
                className="flex text-sm pt-2 text-gray-500 items-center"
              >
                {expandedDetails ? (
                  <>
                    {" "}
                    <ChevronUpCircle className="h-4 w-4 mr-2" /> hide details
                  </>
                ) : (
                  <>
                    {" "}
                    <CircleChevronDown className="h-4 w-4 mr-2" /> more details
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <button
          className="bg-blue-950 text-white h-8 w-8 rounded-full flex justify-center items-center"
          onClick={() => onEdit(patient)}
        >
          <Pen className="h-4 w-4" />
        </button>
      </div>
      {expandedDetails && (
        <div className="mt-2 text-gray-500 text-xs mx-16">
          <p>{patient.description ? patient.description : "The patient dose not have any more details to show."}</p>
        </div>
      )}
    </div>
  );
}
