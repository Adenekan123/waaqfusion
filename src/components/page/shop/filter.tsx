"use client";

import { Body, Container, CustomButton, Stack } from "@/components/ui";
import React, { useState } from "react";
import { GoFilter } from "react-icons/go";

export const Filter = () => {
  const [filter, setFilter] = useState<"categories" | "skills" | "ages">(
    "categories"
  );
  const [show, setShow] = useState(false);
  return (
    <Container styles="z-50 bg-white shadow-lg p-6 md:shadow-inherit sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div>
            <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
              Kits
            </span>
          </div>
          <div>
            <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
              courses
            </span>
          </div>

          <div>
            <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
              Accessories
            </span>
          </div>
        </div>
        <div className="relative">
          <button onClick={() => setShow((prev) => !prev)}>
            <GoFilter size={30} />
          </button>
          {show ? (
            <div className="fixed z-[500] md:absolute top-0 md:top-full left-0 md:-left-72 bg-white rounded-lg shadow-2xl w-full md:w-96 h-screen md:h-auto">
              <div className="flex justify-between items-center border-b bg-white p-6">
                <Body title="Filter" styles="font-bold" />
                <button className="text-md font-bold text-orange-500 capitalize">
                  Reset Filters
                </button>
              </div>
              <div className="flex h-[60vh] md:h-auto">
                <div className="basis-6/12 bg-gray-100 border-r">
                  <div className="flex flex-col">
                    <button
                      onClick={() => setFilter("categories")}
                      className={`px-6 py-4 text-left hover:bg-white ${
                        filter === "categories" ? "bg-white font-bold" : ""
                      }`}
                    >
                      Categories
                    </button>
                    <button
                      onClick={() => setFilter("skills")}
                      className={`px-6 py-4 text-left hover:bg-white ${
                        filter === "skills" ? "bg-white font-bold" : ""
                      }`}
                    >
                      Skills
                    </button>
                    <button
                      onClick={() => setFilter("ages")}
                      className={`px-6 py-4 text-left hover:bg-white ${
                        filter === "ages" ? "bg-white font-bold" : ""
                      }`}
                    >
                      Ages
                    </button>
                  </div>
                </div>
                <div className="basis-6/12  p-6">
                  {filter === "categories" ? (
                    <Stack direction="flex-col" gap="gap-8">
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="kits"
                      >
                        <input type="checkbox" name="kits" id="kits" />
                        <span className="text-md">Kits</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="kits+courses"
                      >
                        <input
                          type="checkbox"
                          name="kits+courses"
                          id="kits+courses"
                        />
                        <span className="text-md">Kits + Courses</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="courses"
                      >
                        <input type="checkbox" name="courses" id="courses" />
                        <span className="text-md">Courses</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="bridgekits"
                      >
                        <input
                          type="checkbox"
                          name="bridgekits"
                          id="bridgekits"
                        />
                        <span className="text-md">Bridge Kits</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="accessories"
                      >
                        <input
                          type="checkbox"
                          name="accessories"
                          id="accessories"
                        />
                        <span className="text-md">Accessories</span>
                      </label>
                    </Stack>
                  ) : null}
                  {filter === "skills" ? (
                    <Stack direction="flex-col" gap="gap-8">
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="robotic"
                      >
                        <input type="checkbox" name="robotic" id="robotic" />
                        <span className="text-md">Robotics</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="coding"
                      >
                        <input type="checkbox" name="coding" id="coding" />
                        <span className="text-md">Coding</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="iot"
                      >
                        <input type="checkbox" name="iot" id="iot" />
                        <span className="text-md">IoT</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="electronics"
                      >
                        <input
                          type="checkbox"
                          name="electronics"
                          id="electronics"
                        />
                        <span className="text-md">Electronics</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="ai"
                      >
                        <input type="checkbox" name="ai" id="ai" />
                        <span className="text-md">AI</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="mechanical_design"
                      >
                        <input
                          type="checkbox"
                          name="mechanical_design"
                          id="mechanical_design"
                        />
                        <span className="text-md">Mechanical Design</span>
                      </label>
                    </Stack>
                  ) : null}
                  {filter === "ages" ? (
                    <Stack direction="flex-col" gap="gap-8">
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="5-8"
                      >
                        <input type="checkbox" name="5-8" id="5-8" />
                        <span className="text-md">5-8 Years Old</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="8-12"
                      >
                        <input type="checkbox" name="8-12" id="8-12" />
                        <span className="text-md">8-12 Years Old</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="12-16"
                      >
                        <input type="checkbox" name="12-16" id="12-16" />
                        <span className="text-md">12-16 Years Old</span>
                      </label>
                    </Stack>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between items-center border-b bg-white px-6 pt-2 pb-4 border-t">
                <CustomButton title="Close" outlined styles="shadow-lg bg-red-100" whenClicked={()=>setShow(false)} />
                <CustomButton title="Apply Filter" styles="shadow-lg" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};
