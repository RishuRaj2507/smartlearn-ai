"use client";

import { useState } from "react";

export default function CoursesPage() {
  const [course, setCourse] =
    useState({
      title: "",
      description: "",
      duration: "",
      level: "Beginner",
    });

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(course);

    alert(
      "Course Created Successfully"
    );

    setCourse({
      title: "",
      description: "",
      duration: "",
      level: "Beginner",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Create Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Course Title"
          value={course.title}
          onChange={(e) =>
            setCourse({
              ...course,
              title:
                e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Description"
          value={
            course.description
          }
          onChange={(e) =>
            setCourse({
              ...course,
              description:
                e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Duration"
          value={
            course.duration
          }
          onChange={(e) =>
            setCourse({
              ...course,
              duration:
                e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        />

        <select
          value={course.level}
          onChange={(e) =>
            setCourse({
              ...course,
              level:
                e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        >
          <option>
            Beginner
          </option>
          <option>
            Intermediate
          </option>
          <option>
            Advanced
          </option>
        </select>

        <button
          type="submit"
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Create Course
        </button>

      </form>

    </div>
  );
}