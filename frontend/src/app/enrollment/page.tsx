"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function EnrollmentPage() {
  const [employees, setEmployees] =
    useState<any[]>([]);

  const [courses, setCourses] =
    useState<any[]>([]);

  const [employeeId, setEmployeeId] =
    useState("");

  const [courseId, setCourseId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    fetchEmployees();
    fetchCourses();
  }, []);

  const fetchEmployees =
    async () => {
      try {
        const response =
          await axios.get(
            "http://localhost:8000/api/user/all"
          );

        setEmployees(
          response.data.users || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  const fetchCourses =
    async () => {
      try {
        const response =
          await axios.get(
            "http://localhost:8000/api/course/all"
          );

        setCourses(
          response.data.courses || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  const assignCourse =
    async () => {
      if (
        !employeeId ||
        !courseId
      ) {
        alert(
          "Select Employee and Course"
        );
        return;
      }

      try {
        setLoading(true);

        await axios.post(
          "http://localhost:8000/api/enrollment/assign",
          {
            employeeId,
            courseId,
          }
        );

        alert(
          "Course Assigned Successfully"
        );

        setEmployeeId("");
        setCourseId("");
      } catch (error: any) {
        console.error(error);

        alert(
          error?.response?.data
            ?.message ||
            "Assignment Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Assign Course
      </h1>

      {/* Employee Dropdown */}

      <div className="mb-6">

        <label className="block mb-2 font-medium">
          Select Employee
        </label>

        <select
          value={employeeId}
          onChange={(e) =>
            setEmployeeId(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        >
          <option value="">
            Choose Employee
          </option>

          {employees.map(
            (employee) => (
              <option
                key={
                  employee._id
                }
                value={
                  employee._id
                }
              >
                {employee.name}
              </option>
            )
          )}
        </select>

      </div>

      {/* Course Dropdown */}

      <div className="mb-6">

        <label className="block mb-2 font-medium">
          Select Course
        </label>

        <select
          value={courseId}
          onChange={(e) =>
            setCourseId(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        >
          <option value="">
            Choose Course
          </option>

          {courses.map(
            (course) => (
              <option
                key={
                  course._id
                }
                value={
                  course._id
                }
              >
                {course.title}
              </option>
            )
          )}
        </select>

      </div>

      {/* Button */}

      <button
        onClick={assignCourse}
        disabled={loading}
        className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
        "
      >
        {loading
          ? "Assigning..."
          : "Assign Course"}
      </button>

    </div>
  );
}