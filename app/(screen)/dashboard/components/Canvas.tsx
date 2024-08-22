"use client";
import { FaFileCode } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addIndex, setCounter } from "@/app/global/redux";
import {
  confirmResultFn,
  mainFn,
  checkQuestionAnswer,
  confirmMainResultFn,
} from "@/utils/helper";
import { toast } from "@/components/ui/use-toast";
import Congrat from "../../(display)/components/Congrat";

const Canvas = ({ val, result, output, path, levelPath }: any) => {
  return (
    <main>
      <div></div>
    </main>
  );
};

export default Canvas;
