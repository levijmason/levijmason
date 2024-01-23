"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useMemo, useState } from "react";

export const ContactForm = ({
  action,
  placeholders,
}: {
  action: (data: any) => Promise<any>;
  placeholders: { name: string; email: string; message: string };
}) => {
  const [name, setName] = useState(placeholders.name);
  const [email, setEmail] = useState(placeholders.email);
  const [message, setMessage] = useState(placeholders.message);
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const nameIsInvalid = useMemo(() => name === "", [name]) ? true : false;
  const emailIsInvalid = useMemo(() => validateEmail(email), [email])
    ? false
    : true;
  const messageIsInvalid = useMemo(() => message === "", [message])
    ? true
    : false;

  async function sendMesssage() {
    if (nameIsInvalid || emailIsInvalid || messageIsInvalid) {
      console.log("Invalid entry");
      return false;
    }
    setIsSending(true);

    const rawFormData = {
      name,
      email,
      message,
    };

    const res = await action(rawFormData);

    setName(placeholders.name);
    setEmail(placeholders.email);
    setMessage(placeholders.message);
    setIsSending(false);

    return res;
  }

  return (
    <form action={sendMesssage} className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <Input
          isRequired
          isInvalid={nameIsInvalid}
          color={nameIsInvalid ? "danger" : "primary"}
          errorMessage={nameIsInvalid && "Please enter your name"}
          onValueChange={setName}
          defaultValue=""
          type="text"
          label="Name"
          labelPlacement="outside"
          placeholder="Peter Gregory"
          variant="bordered"
          classNames={{
            label: "text-foreground",
            inputWrapper: "bg-default-100 border-transparent",
            input: "bg-default-100",
          }}
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          }
          size="lg"
        />
        <Input
          isRequired
          isInvalid={emailIsInvalid}
          color={emailIsInvalid ? "danger" : "primary"}
          errorMessage={emailIsInvalid && "Please enter a valid email"}
          onValueChange={setEmail}
          type="email"
          label="Email"
          labelPlacement="outside"
          placeholder="peter.g@raviga.com"
          variant="bordered"
          classNames={{
            label: "text-foreground",
            inputWrapper: "bg-default-100 border-transparent",
            input: "bg-default-100",
          }}
          startContent={
            <svg
              aria-label="Email"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          }
          size="lg"
        />
      </div>
      <Textarea
        isRequired
        isInvalid={messageIsInvalid}
        color={messageIsInvalid ? "danger" : "primary"}
        errorMessage={messageIsInvalid && "Please enter a message"}
        onValueChange={setMessage}
        label="Message"
        labelPlacement="outside"
        placeholder={`Have you ever eaten at "Burger King"?`}
        classNames={{
          label: "text-foreground",
          inputWrapper: "bg-default-100 border-transparent",
          input: "bg-default-100",
        }}
        variant="bordered"
        size="lg"
      />
      <Button
        color="primary"
        className="w-full lg:w-auto"
        type="submit"
        variant="ghost"
        isLoading={isSending}
        isDisabled={
          messageIsInvalid ||
          name === placeholders.name ||
          email === placeholders.email ||
          message === placeholders.message
        }
      >
        <p className="text-foreground">
          {isSending ? "Sending..." : "Send message"}
        </p>
      </Button>
    </form>
  );
};
