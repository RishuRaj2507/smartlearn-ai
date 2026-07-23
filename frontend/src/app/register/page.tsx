import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Registration</h1>
        <p className="mt-3 text-slate-600">
          Please contact an administrator to create your account.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          Back to sign in
        </Link>
      </section>
    </main>
  );
}
