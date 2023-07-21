"use client";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@components/ui/dialog";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const formSchema = z.object({
  username: z.string().min(2).max(50),
});
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
const Form: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
          <DialogDescription>Please enter your info.</DialogDescription>
        </DialogHeader>
        <Input placeholder="shadcn" />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
