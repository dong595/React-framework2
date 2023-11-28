import { signin, signup } from "@/apis/user";
import { IUser } from "@/interfaces/user";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation, useQuery } from "react-query";
import { TERipple } from "tw-elements-react";
import { toast } from "react-toastify";

export default function User(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const queryClient = new QueryClient();
  const { isLoading, isError } = useQuery({
    queryKey: ["USER"],
    queryFn: () => {},
  });
  const mutation = useMutation(
    (user: IUser) => {
      if (isActive) {
        return signup(user);
      } else {
        return signin(user);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["USER"]);
      },
    }
  );
  const handleCheck = () => {
    setIsActive(!isActive);
  };
  const onSubmit = (user: IUser) => {
    toast(`${!isActive ? "login success" : "register suscces"} !`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    mutation.mutate(user);
  };
  if (isLoading) <div>loading...</div>;
  if (isError) <div>erorr...</div>;
  return (
    <section className="h-full w-full">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://auteur.g5plus.net/main/wp-content/uploads/2018/11/logo-dark.png"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold"></h4>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4">
                        Please {!isActive ? "login" : "register"} to your
                        account
                      </p>
                      {!isActive ? (
                        <>
                          <input
                            {...register("email", {
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                              required: "Email is required",
                            })}
                            id="email"
                            name="email"
                            type="email"
                            className={`border w-full my-2 ${
                              errors.email
                                ? "border-red-500 bg-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                                : "border-black-500 bg-black-50 text-black-900 placeholder-black-700 text-sm rounded-lg focus:ring-black-500 focus:border-black-500"
                            } block w-full p-2.5 py-4`}
                            placeholder="Email address"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => {
                              return message ? (
                                <p className="text-red-700">{message}</p>
                              ) : null;
                            }}
                          />{" "}
                          <input
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 8,
                                message:
                                  "Password must be at least 8 characters long",
                              },
                              pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                message:
                                  "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
                              },
                            })}
                            id="password"
                            name="password"
                            type="password"
                            className={`" border w-full my-2 ${
                              errors.password
                                ? "border-red-500 bg-redd-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                                : " border-black-500 bg-black-50 text-black-900 placeholder-black-700 text-sm rounded-lg focus:ring-black-500 focus:border-black-500"
                            }  block w-full p-2.5 py-4"`}
                            placeholder="Password"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => {
                              return message ? (
                                <p className="text-red-700">{message}</p>
                              ) : null;
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <input
                            {...register("email", {
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                              required: "Email is required",
                            })}
                            id="email"
                            name="email"
                            type="email"
                            className={`border w-full my-2 ${
                              errors.email
                                ? "border-red-500 bg-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                                : "border-black-500 bg-black-50 text-black-900 placeholder-black-700 text-sm rounded-lg focus:ring-black-500 focus:border-black-500"
                            } block w-full p-2.5 py-4`}
                            placeholder="Email address"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => {
                              return message ? (
                                <p className="text-red-700">{message}</p>
                              ) : null;
                            }}
                          />
                          <input
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 8,
                                message:
                                  "Password must be at least 8 characters long",
                              },
                              pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                message:
                                  "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
                              },
                            })}
                            id="password"
                            name="password"
                            type="password"
                            className={`" border w-full my-2 ${
                              errors.password
                                ? "border-red-500 bg-redd-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                                : " border-black-500 bg-black-50 text-black-900 placeholder-black-700 text-sm rounded-lg focus:ring-black-500 focus:border-black-500"
                            }  block w-full p-2.5 py-4"`}
                            placeholder="Password"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => {
                              return message ? (
                                <p className="text-red-700">{message}</p>
                              ) : null;
                            }}
                          />
                        </>
                      )}

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            {!isActive ? "login" : "register"}
                          </button>
                        </TERipple>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">
                          {!isActive
                            ? "Don't have an account?"
                            : "You have account already"}
                        </p>
                        <TERipple rippleColor="light">
                          <button
                            onClick={handleCheck}
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            {!isActive ? "Register" : "login"}
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
