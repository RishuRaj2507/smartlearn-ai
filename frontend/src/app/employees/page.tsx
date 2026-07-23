"use client";

import { useState } from "react";

import {
  createEmployee,
} from "@/services/userService";

export default function EmployeesPage() {
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      department:
        "General",
      role: "employee",
    });

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await createEmployee(
          form
        );

        alert(
          "Employee Added Successfully"
        );

        setForm({
          name: "",
          email: "",
          password: "",
          department:
            "General",
          role:
            "employee",
        });
      } catch (error) {
        console.error(
          error
        );

        alert(
          "Failed To Add Employee"
        );
      }
    };

  return (
    <div className="max-w-2xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Add Employee
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Employee Name"
          className="border p-3 w-full rounded-lg"
          value={
            form.name
          }
          onChange={(e) =>
            setForm({
              ...form,
              name:
                e.target
                  .value,
            })
          }
        />

        <input
          type="email"
          placeholder="Employee Email"
          className="border p-3 w-full rounded-lg"
          value={
            form.email
          }
          onChange={(e) =>
            setForm({
              ...form,
              email:
                e.target
                  .value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded-lg"
          value={
            form.password
          }
          onChange={(e) =>
            setForm({
              ...form,
              password:
                e.target
                  .value,
            })
          }
        />

        <input
          type="text"
          placeholder="Department"
          className="border p-3 w-full rounded-lg"
          value={
            form.department
          }
          onChange={(e) =>
            setForm({
              ...form,
              department:
                e.target
                  .value,
            })
          }
        />

        <button
          type="submit"
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
          "
        >
          Add Employee
        </button>

      </form>
    </div>
  );
}