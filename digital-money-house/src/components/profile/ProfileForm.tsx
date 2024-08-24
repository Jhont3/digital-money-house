"use client";
import { Editing, UserInputs } from "@/interfaces";
import Image from "next/image";
import { useEffect, useState, KeyboardEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const ProfileForm = ({ profileInfo, token }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<UserInputs>({
    defaultValues: profileInfo ?? {},
    mode: "onBlur",
  });

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullname = e.target.value;
    const [firstname, lastname] = fullname.split(" ");

    setValue("firstname", firstname || "");
    setValue("lastname", lastname || "");
  };

  useEffect(() => {
    if (profileInfo) {
      reset(profileInfo);
    }
  }, [profileInfo, reset]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  const [editing, setEditing] = useState<Editing>({
    dni: true,
    email: true,
    fullname: true,
    password: true,
    phone: true,
  });

  const handleEdit = (key: keyof Editing) => {
    setEditing((prevEditing) => ({
      ...prevEditing,
      [key]: !prevEditing[key],
    }));
  };

  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    const { password, ...restData } = data;
    const submitData = password === "******" || password === "" ? restData : data;
    console.log(submitData, "data del submit");
    // Perform the actual form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-4 py-6 rounded-lg flex flex-col gap-2 drop-shadow-md md:p-6"
    >
      <h2 className="text-dark-1 font-bold text-xl">Tus datos</h2>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
        <p className="text-dark-1 md:col-span-1">Email</p>

        <div className="flex justify-between md:col-span-2 lg:col-span-3">
          <input
            id="email"
            className="opacity-50 focus:border-select-1 focus:ring-0"
            {...register("email", { required: true })}
            autoComplete="securityCode"
            defaultValue={profileInfo?.email}
            readOnly
            disabled
          />
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
        <p className="text-dark-1 md:col-span-1">Nombre y Apellido</p>

        <div className="flex justify-between md:col-span-2 lg:col-span-3">
          <input
            id="fullname"
            className="opacity-50"
            autoComplete="fullname"
            defaultValue={`${profileInfo?.firstname} ${profileInfo?.lastname}`}
            onChange={handleFullnameChange}
            disabled={editing.fullname}
            onKeyDown={handleKeyDown}
          />
          <span
            onClick={() => handleEdit("fullname")}
            className="flex items-center md:justify-end"
          >
            <Image
              src="/imgs/edit.png"
              className="grayscale"
              alt="icon"
              width={22}
              height={22}
            />
          </span>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
        <p className="text-dark-1 md:col-span-1">CUIT</p>

        <div className="flex justify-between md:col-span-2 lg:col-span-3">
          <input
            id="dni"
            className="opacity-50"
            type="text"
            autoComplete="dni"
            {...register("dni")}
            defaultValue={`${profileInfo?.dni}`}
            disabled={editing.dni}
            onKeyDown={handleKeyDown}
          />
          <span
            className="flex items-center md:justify-end"
            onClick={() => handleEdit("dni")}
          >
            <Image
              src="/imgs/edit.png"
              className="grayscale"
              alt="icon"
              width={22}
              height={22}
            />
          </span>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
        <p className="text-dark-1 md:col-span-1">Teléfono</p>

        <div className="flex justify-between md:col-span-2 lg:col-span-3">
          <input
            id="phone"
            className="opacity-50"
            type="text"
            autoComplete="phone"
            {...register("phone")}
            defaultValue={`${profileInfo?.phone}`}
            disabled={editing.phone}
            onKeyDown={handleKeyDown}
          />
          <span
            className="flex items-center md:justify-end"
            onClick={() => handleEdit("phone")}
          >
            <Image
              src="/imgs/edit.png"
              className="grayscale"
              alt="icon"
              width={22}
              height={22}
            />
          </span>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row md:grid-rows-1 lg:grid-cols-4 ">
        <p className="text-dark-1 md:col-span-1">Contraseña</p>

        <div className="flex justify-between md:col-span-2 lg:col-span-3">
          <input
            id="password"
            className="opacity-50"
            type="password"
            autoComplete="password"
            {...register("password")}
            defaultValue="******"
            disabled={editing.password}
            onKeyDown={handleKeyDown}
          />
          <span
            className="flex items-center md:justify-end"
            onClick={() => handleEdit("password")}
          >
            <Image
              src="/imgs/edit.png"
              className="grayscale"
              alt="icon"
              width={22}
              height={22}
            />
          </span>
        </div>
      </div>
      <hr />
    </form>
  );
};
