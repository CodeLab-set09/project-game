import DisplayScreen from "@/app/(screen)/dashboard/components/DisplayScreen";
import QuestionScreen from "@/app/(screen)/dashboard/components/QuestionScreen";
import React from "react";

const page = () => {
  return (
    <main className="w-full  grid grid-cols-1 lg:grid-cols-7 h-full gap-2">
      <section className="order-2 lg:order-1 col-span-1 lg:col-span-3 border rounded-md p-2 ">
        <QuestionScreen />
      </section>
      <section className="order-1 lg:order-2 col-span-1 lg:col-span-4 border p-2 rounded-md">
        <DisplayScreen />
      </section>
    </main>
  );
};

export default page;
