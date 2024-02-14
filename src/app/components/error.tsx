"use client";

export const Error = ({ error }: { error: string }) => (
  <div className="bg-white p-6 rounded-lg flex justify-center">
    <h1 className="text-xl text-[#ff0000]">{error}</h1>
  </div>
);
