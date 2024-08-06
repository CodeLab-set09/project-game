"use client";
import { FaFileCode } from "react-icons/fa6";
import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addIndex } from "@/app/global/redux";

const DisplayScreen = ({ redirect, answer, output }: any) => {
  const dispatch = useDispatch();
  const ref: any = useRef(null);

  const mounted = (editor: any) => {
    ref.current = editor;
    editor.focus;
  };
  const [state, setState] = useState<string>();
  function handleEditorChange(value?: string) {
    setState(value!);
  }

  const url: string = "https://emkc.org/api/v2/piston/execute";

  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState(false);
  console.log(disable);
  const coded = async () => {
    try {
      dispatch(addIndex());
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const runCode = async () => {
    try {
      setLoading(true);
      await axios
        .post(url, {
          language: "javascript",
          version: "18.15.0",
          files: [
            {
              name: "codebook project",
              content: state,
            },
          ],
          stdin: "",
          args: ["1", "2", "3"],
          compile_timeout: 10000,
          run_timeout: 3000,
          compile_memory_limit: -1,
          run_memory_limit: -1,
        })
        .then((res: any) => {
          setCode(res?.data?.run?.output?.split("\n")[0]);

          if (
            res?.data?.run?.output?.split("\n")[0] == output &&
            state?.includes(answer)
          ) {
            setDisable(true);
          }
          return res?.data?.run?.output?.split("\n");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="flex">
        <h2 className="text-[12px] font-bold border py-2 px-6">
          Javascript <span className="ml-2 text-slate-500 ">v18.0.1</span>
        </h2>
      </div>

      <p className="px-2 py-3 rounded-t-md font-bold text-white bg-neutral-900 text-[12px] mt-10">
        Solution
      </p>

      <div>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue={state}
          onChange={handleEditorChange}
          className="border rounded-md bg-yellow-50 "
          theme="vs-dark"
          onMount={mounted}
        />
      </div>

      <div className="my-3 font-bold text-[12px] flex items-center justify-between">
        <button
          className=" border px-4 py-2 bg-red-500 text-white rounded-md "
          onClick={runCode}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <FaSpinner className="animate-spin" />
              <p>Running</p>
            </div>
          ) : (
            "Run Solution"
          )}
        </button>
      </div>

      <div className="mt-3 rounded-md bg-slate-700 min-h-[100px] text-white p-2 w-full ">
        {code ? (
          <div>{code}</div>
        ) : (
          <div className="w-full h-full flex min-h-[100px] items-center justify-center flex-col">
            <FaFileCode />
            <p>waiting to run code</p>
          </div>
        )}
      </div>

      <div className="mt-10 font-bold text-[15px] flex items-center justify-end">
        <button
          className={` border px-8 py-2 ${
            disable ? "bg-red-500" : "bg-red-300"
          } text-white rounded-md `}
          onClick={() => {
            coded();
          }}
          disabled={!disable}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default DisplayScreen;
