"use client";

import { Button } from "@/components/shared/button";
import { Input, PasswordInput } from "@/components/shared/input";
import { useState } from "react";

const ControlledFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`${email}, ${password}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="w-80">
        {/* action akan dijalankan jika button dengan type submit di dalam form kita click */}
        <form className="flex flex-col gap-y-6" action={handleSubmit}>
          <Input
            name="email"
            type="text"
            placeholder="Input your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <PasswordInput
            name="password"
            placeholder="Input your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ControlledFormPage;
