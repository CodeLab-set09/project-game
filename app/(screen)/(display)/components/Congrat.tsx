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
  console.log("path: ", path);
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
            <DialogTitle>Congratulations</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center">
            <Button onClick={clicked}>
              <a href={path}>Next Level</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Congrat;
