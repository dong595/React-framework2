import { TEChart } from "tw-elements-react";

export default function DashBoard(): JSX.Element {
  return (
    <>
      <div className="mt-3">
        <h1 className="text-3xl ml-2 font-medium text-blue-500">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4 mt-10">
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
              <i className="ni ni-money-coins text-lg" aria-hidden="true" />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900">
                $3,600
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Today's Money
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              +16%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
              <i className="ni ni-world text-lg" aria-hidden="true" />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900">
                2,300
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Today's Users
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              +3%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
              <i className="ni ni-paper-diploma text-lg" aria-hidden="true" />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900">
                +3,462
              </span>
              <h3 className="text-base font-normal text-gray-500">
                New Clients
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-red-500">
              -2%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300">
              <i className="ni ni-cart text-lg" aria-hidden="true" />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900">
                $83,430
              </span>
              <h3 className="text-base font-normal text-gray-500">Sales</h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              +5.34%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 my-4">
        <div>
          <TEChart
            type="radar"
            data={{
              labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday ",
              ],
              datasets: [
                {
                  label: "Traffic",
                  data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                },
              ],
            }}
          />
        </div>

        <div>
          {" "}
          <TEChart
            type="bar"
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  label: "Traffic",
                  data: [30, 15, 62, 65, 61, 6],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "green",
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#4285F4",
                  },
                },
                y: {
                  ticks: {
                    color: "#f44242",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
