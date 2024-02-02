import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl ">Learn More About Javascript</h2>
        <p className="text-gray-500 my-2">
          JavaScript is a high-level, interpreted programming language that is
          one of the core technologies of the World Wide Web
        </p>
        <Button gradientDuoTone="purpleToPink">
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 Javascript projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_3840,q_auto" />
      </div>
    </div>
  );
}
