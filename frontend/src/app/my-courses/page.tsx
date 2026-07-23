"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getMyCourses,
  updateProgress,
} from "@/services/enrollmentService";

export default function MyCoursesPage() {
  const [courses, setCourses] =
    useState<any[]>([]);

  const employeeId =
    typeof window === "undefined"
      ? ""
      : window.localStorage.getItem(
          "employeeId"
        ) || "";

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses =
    async () => {
      if (!employeeId) return;

      try {
        const data =
          await getMyCourses(
            employeeId
          );

        setCourses(
          data.enrollments
        );
      } catch (error) {
        console.error(error);
      }
    };

  const continueLearning =
    async (
      enrollmentId: string,
      currentProgress: number
    ) => {
      let newProgress =
        currentProgress + 20;

      if (newProgress > 100)
        newProgress = 100;

      await updateProgress(
        enrollmentId,
        newProgress
      );

      fetchCourses();
    };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Courses
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {courses.map(
          (item) => (
            <div
              key={item._id}
              className="
                bg-white
                rounded-2xl
                shadow
                border
                p-6
              "
            >
              <h2 className="text-2xl font-bold">
                {
                  item.courseId
                    .title
                }
              </h2>

              <p className="text-slate-500 mt-2">
                {
                  item.courseId
                    .description
                }
              </p>

              <div className="mt-5">

                <p>
                  Level:
                  <b>
                    {" "}
                    {
                      item
                        .courseId
                        .level
                    }
                  </b>
                </p>

                <p>
                  Duration:
                  <b>
                    {" "}
                    {
                      item
                        .courseId
                        .duration
                    }
                  </b>
                </p>

                <p>
                  Status:
                  <b>
                    {" "}
                    {
                      item
                        .status
                    }
                  </b>
                </p>

              </div>

              <div className="mt-6">

                <div className="w-full bg-slate-200 rounded-full h-4">

                  <div
                    className="
                      bg-blue-600
                      h-4
                      rounded-full
                    "
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />

                </div>

                <p className="mt-2 font-semibold">
                  {
                    item.progress
                  }
                  %
                </p>

              </div>

              <button
                disabled={
                  item.progress >=
                  100
                }
                onClick={() =>
                  continueLearning(
                    item._id,
                    item.progress
                  )
                }
                className="
                  mt-6
                  px-5
                  py-3
                  bg-blue-600
                  text-white
                  rounded-xl
                  hover:bg-blue-700
                  disabled:bg-green-600
                "
              >
                {item.progress >=
                100
                  ? "Completed"
                  : "Continue Learning"}
              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}
