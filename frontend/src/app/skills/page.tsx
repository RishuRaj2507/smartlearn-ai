"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/layouts/Sidebar";
import TopNavbar from "@/components/layouts/TopNavbar";

import SkillsHeader from "@/components/skills/SkillHeader";
import SkillGapOverview from "@/components/skills/SkillGapOverview";
import SkillMatrix from "@/components/skills/SkillMatrix";
import GapAnalysisCard from "@/components/skills/GapAnalysisCard";
import RecommendedSkills from "@/components/skills/RecommendedSkills";
import SkillTrendChart from "@/components/skills/SkillTrendChart";

import { getSkills } from "@/services/skillService";

interface Skill {
  _id: string;
  skillName: string;
  currentLevel: number;
  requiredLevel: number;
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSkills = async () => {
    try {
      const data = await getSkills();

      setSkills(data.skills || []);
    } catch (error) {
      console.error("Failed to fetch skills", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const totalSkills = skills.length;

  const averageGap =
    totalSkills > 0
      ? Math.round(
          skills.reduce(
            (acc, skill) =>
              acc +
              (skill.requiredLevel -
                skill.currentLevel),
            0
          ) / totalSkills
        )
      : 0;

  const readinessScore =
    100 - averageGap;

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <TopNavbar />

        <div className="max-w-[1600px] mx-auto px-8 py-8">
          {/* Header */}
          <SkillsHeader />

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-slate-500 text-sm">
                Total Skills
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {totalSkills}
              </h2>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-slate-500 text-sm">
                Average Skill Gap
              </p>

              <h2 className="text-4xl font-bold mt-2 text-red-500">
                {averageGap}%
              </h2>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-slate-500 text-sm">
                AI Readiness Score
              </p>

              <h2 className="text-4xl font-bold mt-2 text-green-500">
                {readinessScore}%
              </h2>
            </div>
          </div>

          {/* Existing KPI Section */}
          <div className="mt-8">
            <SkillGapOverview />
          </div>

          {/* Database Skills */}
          <section className="mt-10">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Live Skill Gap Analysis
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Real-time data fetched from MongoDB.
              </p>
            </div>

            {loading ? (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center">
                Loading skills...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {skills.map((skill) => {
                  const gap =
                    skill.requiredLevel -
                    skill.currentLevel;

                  return (
                    <div
                      key={skill._id}
                      className="
                        bg-white
                        dark:bg-slate-900
                        rounded-3xl
                        border
                        border-slate-200
                        dark:border-slate-800
                        p-6
                        shadow-sm
                        hover:shadow-lg
                        transition
                      "
                    >
                      <h3 className="text-xl font-bold mb-4">
                        {skill.skillName}
                      </h3>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Current Level</span>
                          <span className="font-semibold">
                            {skill.currentLevel}%
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>Required Level</span>
                          <span className="font-semibold">
                            {skill.requiredLevel}%
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>Gap</span>
                          <span className="font-bold text-red-500">
                            {gap}%
                          </span>
                        </div>

                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-600 h-3 rounded-full"
                            style={{
                              width: `${skill.currentLevel}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Competency Section */}
          <section className="mt-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Competency Assessment
                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Compare current competency levels against organizational targets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 xl:col-span-8">
                <SkillMatrix />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <GapAnalysisCard />
              </div>
            </div>
          </section>

          {/* Analytics Section */}
          <section className="mt-8">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Skill Growth Analytics
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Track competency improvement and AI-generated recommendations.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 xl:col-span-8">
                <SkillTrendChart />
              </div>

              <div className="col-span-12 xl:col-span-4">
                <RecommendedSkills />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}