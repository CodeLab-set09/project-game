import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";

const Congrat = ({ confirmResult, path, clicked }: any) => {
  const index = useSelector((state: any) => state.index);
  const counter = useSelector((state: any) => state.counter);

  console.log("counter: ", counter);

  return (
    <div>
      <Dialog>
        <button
          className={` border px-8 py-2 ${
            confirmResult ? "bg-red-500" : "bg-red-300"
          } text-white rounded-md tracking-widest`}
        >
          <DialogTrigger> {confirmResult ? "Next" : "Thinking?"}</DialogTrigger>
        </button>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Congratulations you just completed stage 1
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center">
            <Button onClick={clicked}>
              {confirmResult ? <a href={path}>Next</a> : "Thinking?"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Congrat;
