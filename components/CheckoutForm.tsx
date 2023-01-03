import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { validateCreditCardDate } from "../utils";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const checkoutFormSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  emailAddress: yup.string().email().required(),
  streetAddress: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.string().required(),
  nameOnCard: yup.string().required(),
  cardNumber: yup.string().required(),
  expirationDate: yup.string().required(),
  cvc: yup.string().required(),
}).required();

type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

export const CheckoutForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema)
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  //   const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //   };

  return (
    <form onSubmit={onSubmit}>
      <div className="py-12">
        <h3 className="text-2xl font-bold">Contact informations</h3>
        <div className="mt-8 max-w-lg">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("firstName")}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                {...register("lastName")}
                id="last-name"
                autoComplete="family-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                {...register("emailAddress" , { required: "Email Address is required" })} 
                aria-invalid={errors.emailAddress ? "true" : "false"} 
                id="email-address"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.emailAddress && <p role="alert" className="text-red-500 text-sm font-bold">{errors.emailAddress?.message}</p>}
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <input
                type="text"
                {...register("streetAddress")}
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                {...register("city")}
                id="city"
                autoComplete="address-level2"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal code
              </label>
              <input
                type="text"
                {...register("postalCode")}
                id="postal-code"
                autoComplete="postal-code"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <h3 className="text-2xl font-bold">Payment details</h3>
        <div className="mt-8 max-w-lg">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name on card
              </label>
              <input
                type="text"
                {...register("nameOnCard")}
                id="nameOnCard"
                autoComplete="cc-given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <input
                type="number"
                {...register("cardNumber")}
                id="card-number"
                autoComplete="cc-number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-4">
              <label className="block text-sm font-medium text-gray-700">
                Expiration date (MM/YY)
              </label>
              <input
                type="text"
                {...register("expirationDate", {
                    required: true,
                    validate: validateCreditCardDate,
                })}
                id="expirationDate"
                autoComplete="cc-exp"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
               {errors.expirationDate && <p role="alert" className="text-red-500 text-sm font-bold">{errors.expirationDate?.message}</p>}
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="number"
                {...register("cvc")}
                id="cvc"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Pay
      </button>
    </form>
  );
};
