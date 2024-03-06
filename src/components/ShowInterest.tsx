"use client";

import { showInterest } from "@/actions/interest";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import why from "../../public/images/why.jpg";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone_no: string;
};

export default function ShowInterest({ propertyId }: { propertyId: string }) {
  const [shownInterest, hasShownInterest] = useState(false);
  const [showError, setShowError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // const { pending } = useFormStatus();
  // console.log(watch("email"));
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);

    try {
      await showInterest(data, propertyId);

      if (document) {
        (document.getElementById("my_modal_2") as HTMLFormElement).showModal();
      }
      hasShownInterest(true);
    } catch (error: any) {
      setShowError(error.message);
      console.log("unsuccessful", error);
    }
  };

  return (
    <div className="">
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex justify-center flex-col">
          <h3 className="font-bold text-lg">Successful</h3>
          <p className="py-4">Your interest has been registered successfully</p>
          <div>
            <Image
              alt="Mountains"
              // Importing an image will
              // automatically set the width and height
              src={why}
              sizes="100vw"
              // Make the image display full width
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* blur-sm */}
        <form method="dialog" className="modal-backdrop glass ">
          <button>close</button>
        </form>
      </dialog>
      {!shownInterest ? (
        <div className="border-gray-300 border-[1px] rounded mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg ">
            <h3 className="text-xl font-bold ">Show Interest</h3>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque
            </p>
          </div>
          {showError && (
            <div className="border-[1px] rounded border-red-200 text-red-300 p-2 my-2">
              <small>{showError}</small>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Full Name"
                  // id="name"
                  defaultValue="test"
                  {...register("name")}
                />
                {errors.name && <span>This field is required</span>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Adress
              </label>

              <div className="relative">
                <input
                  type="email"
                  // id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email")}
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>

            <div>
              <label htmlFor="phone_no" className="sr-only">
                Phone Number
              </label>

              <div className="relative">
                <input
                  type="text"
                  // // id="phone"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Phone Number"
                  {...(register("phone_no"), { required: true })}
                />
                {errors.phone_no && <span>This field is required</span>}
              </div>
            </div>

            <div className="my-2">
              <button
                type="submit"
                className="btn w-full my-2 "
                // aria-disabled={pending}
              >
                Show Interest
              </button>
              <button type="button" className="btn w-full my-2 ">
                Button
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 flex justify-center flex-col border-indigo-300 border-[1px] rounded">
          <div>
            <Image
              alt="Mountains"
              // Importing an image will
              // automatically set the width and height
              src={why}
              sizes="100vw"
              // Make the image display full width
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              alt="Mountains"
              // Importing an image will
              // automatically set the width and height
              src={why}
              sizes="100vw"
              // Make the image display full width
              className="w-full h-auto"
            />
          </div>
          <p className="py-2 max-w-44">
            You have indicated interest in this property
          </p>
        </div>
      )}
    </div>
  );
}

// action={async (formData: FormData) => {
//   await showInterest(propertyId, formData);
//   if (document) {
//     (
//       document.getElementById("my_modal_2") as HTMLFormElement
//     ).showModal();
//   }
// }}
