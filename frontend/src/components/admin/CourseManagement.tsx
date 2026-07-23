"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getCourses,
} from "@/services/courseService";

interface Course {
  _id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  enrolled: number;
  status: string;
}

export default function CourseManagement() {
  const router = useRouter();

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses =
    async () => {
      try {
        const data =
          await getCourses();

        setCourses(
          data.courses || []
        );
      } catch (error) {
        console.error(
          "Failed to load courses:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-800
        p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">
          Course Management
        </h3>

        <button
          onClick={() =>
            router.push("/courses")
          }
          className="
            px-4 py-2
            bg-blue-600
            text-white
            rounded-xl
            text-sm
            hover:bg-blue-700
            transition
          "
        >
          Create Course
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-10">
          <p className="text-slate-500">
            Loading courses...
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {courses.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-500">
                No courses found
              </p>
            </div>
          ) : (
            courses.map((course) => (
              <div
                key={course._id}
                className="
                  p-4
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-700
                "
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">
                      {course.title}
                    </h4>

                    <p className="text-sm text-slate-500 mt-1">
                      {course.duration}
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      {course.description}
                    </p>
                  </div>

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      bg-blue-100
                      text-blue-700
                      text-xs
                    "
                  >
                    {course.level}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}