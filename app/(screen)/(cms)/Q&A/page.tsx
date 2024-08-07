"use client";
import Image from "next/image";
import { useState, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const base = process.env.BASE as string;
  const formAction = async (formData: FormData) => {
    const question = formData.get("question");
    const dQ = `<p>${question}</p>`;
    const answer = formData.get("answer");
    const output = formData.get("output");
    const example = formData.get("example");
    const instruction = formData.get("instruction");
    const defaultcode = formData.get("default");
    const url = formData.get("url");
    const tag = formData.get("tag");
    const rTag = tag?.toString().split(",");
    const usecase = formData.get("usecase");
    const rUseCase = usecase?.toString().split(",");
    await fetch(`/api/add`, {
      method: "POST",
      body: JSON.stringify({
        question: dQ,
        answer,
        output,
        example,
        instruction,
        defaultcode,
        tag: rTag,
        usecase: rUseCase,
      }),
    }).then(() => {
      setLoading(false);
      window.location.reload();
    });
  };
  return (
    <main className="p-5">
      <div className="flex justify-center items-center  p-4 ">
        <form
          action={formAction}
          className="border p-4 rounded-md flex flex-col gap-4 w-[600px] mt-5 "
        >
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Question</label>
            <textarea
              required
              className="outline-none border p-1 rounded-sm min-h-[100px]"
              placeholder="Enter the Example here"
              name="question"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Answer</label>
            <textarea
              required
              className="outline-none border p-1 rounded-sm min-h-[100px]"
              placeholder="Enter the Example here"
              name="answer"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Example</label>
            <textarea
              required
              className="outline-none border p-1 rounded-sm min-h-[100px]"
              placeholder="Enter the Example here"
              name="example"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Output</label>
            <textarea
              required
              className="outline-none border p-1 rounded-sm min-h-[100px]"
              placeholder="Enter the Example here"
              name="output"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Instruction</label>
            <textarea
              required
              className="outline-none border p-1 rounded-sm min-h-[100px]"
              placeholder="Enter the Example here"
              name="instruction"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">Default Value</label>
            <textarea
              required
              className="outline-none border p-1 rounded-sm min-h-[100px]"
              placeholder="Enter the Defaut Value here"
              name="default"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">
              Tags(Make sure you seperate each tags with a coma.)
            </label>
            <input
              required
              className="outline-none border p-1 rounded-sm"
              placeholder="Enter the Tags here"
              type="text"
              name="tag"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold">
              UseCases(Make sure you seperate each tags with a coma.)
            </label>
            <input
              required
              className="outline-none border p-1 rounded-sm"
              placeholder="Enter the UseCase here"
              type="text"
              name="usecase"
            />
          </div>

          <button
            type="submit"
            onClick={() => setLoading(true)}
            className="p-1 bg-green-900 text-white rounded-md mt-4 "
          >
            {loading ? (
              <BeatLoader
                color="#fff"
                loading={loading}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              " Submit"
            )}{" "}
          </button>
        </form>
      </div>
    </main>
  );
}
