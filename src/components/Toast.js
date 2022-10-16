import React from "react";

const Toast = () => {
  return (
    <div>
     

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-1 p-2 bg-green-500 text-white text-center mx-auto mt-4 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </p>
          <div className="mt-4">
            <p className="text-slate-800 font-semibold text-xl text-center">Thank you for providing the feedback</p>
            <p className="text-slate-600 font-medium text-sm text-center">we will work towards improving your experience</p>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn mx-auto bg-indigo-700 hover:bg-indigo-900 text-white border-none"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
