"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../input/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";

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

      // console.log(data);
      toast.success("Create account successfully");
      registerModal.onClose();
    } catch (error) {
      toast.error("Something went wrong !");
      console.log(
        "🚀 ~ file: RegisterModal.tsx:30 ~ constonSubmit:SubmitHandler<FieldValues>= ~ error:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to AirBnb" subtitle="create an account !" />
      <Input
        id="email"
        type="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />

      {/* <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      /> */}
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 text-center mt-4  font-light">
        <div className="justify-center flex flex-row items-center gap-3 ">
          <div className="">Already have an account ?</div>
          <div
            className="
          text-neutral-800
          cursor-pointer
          hover:underline
          "
            onClick={registerModal.onClose}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen} //access to the zustand state : default is set to false
      title={"Register"}
      actionLabel="Continue"
      onClose={registerModal.onClose} //close the modal
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
