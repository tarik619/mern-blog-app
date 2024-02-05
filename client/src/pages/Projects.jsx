import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold ">Projects</h1>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo similique
        necessitatibus, facilis error reprehenderit culpa?
      </p>
      <CallToAction />
    </div>
  );
}
