"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import useRegisterModal from "@/app/hooks/userRegisterModal";
import Modal from "./Modal";

export default function RegisterModal() {
  const registerModal = useRegisterModal(); //state manager
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const res = await axios.post("/api/register", data);

      registerModal.onClose();
    } catch (error) {
      console.log(
        "🚀 ~ file: RegisterModal.tsx:30 ~ constonSubmit:SubmitHandler<FieldValues>= ~ error:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen} //access to the zustand state : default is set to false
      title={"Register"}
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
