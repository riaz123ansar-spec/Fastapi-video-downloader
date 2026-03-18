"use client";

import getInfo, { GetInfo } from "@/actions/getInfo";
import { useActionState, useState } from "react";

const initailState: GetInfo = {
  success: false
}
export default function Home() {
  const [url, setUrl] = useState("");
  const [state, formAction, isPending] = useActionState(getInfo, initailState);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] px-6 py-10 text-[var(--foreground)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      >
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(163,168,92,0.45),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(28,182,166,0.35),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-[linear-gradient(90deg,transparent,rgba(97,68,10,0.35),transparent)]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[calc(var(--radius)+6px)] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-md)]">
              <span className="font-mono text-lg">YF</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">
                YTDLP Studio
              </p>
              <h1 className="font-serif text-2xl">Quiet power for fast downloads</h1>
            </div>
          </div>
          <div className="rounded-full border border-[var(--border)] bg-[var(--secondary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--secondary-foreground)]">
            Stable Build
          </div>
        </header>

        <section className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)]">
                Download workspace
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Capture reels, clips, and streams with a calm workflow.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)]">
                Paste a video URL, review the details, and export instantly. The new layout keeps everything centered and tidy so you can focus on the file you need.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
                <p className="text-sm font-semibold text-[var(--card-foreground)]">Format ready</p>
                <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--card-foreground),transparent_40%)]">
                  Keep MP4 output or re-run for audio-only exports.
                </p>
              </div>
              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
                <p className="text-sm font-semibold text-[var(--card-foreground)]">Streamlined queue</p>
                <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--card-foreground),transparent_40%)]">
                  Your download link appears the moment it is ready.
                </p>
              </div>
              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
                <p className="text-sm font-semibold text-[var(--card-foreground)]">Clear titles</p>
                <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--card-foreground),transparent_40%)]">
                  Pulls the original title so files stay organized.
                </p>
              </div>
              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)]">
                <p className="text-sm font-semibold text-[var(--card-foreground)]">No extra steps</p>
                <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--card-foreground),transparent_40%)]">
                  Built on your existing FastAPI service.
                </p>
              </div>
            </div>
          </div>

          <div className="glow-frame order-1 rounded-[calc(var(--radius)+8px)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-lg)] lg:order-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--card-foreground),transparent_45%)]">
                  Start a download
                </p>
                <h3 className="font-serif text-2xl">Paste the video link</h3>
              </div>

              <form action={formAction} className="space-y-4">
                <label className="block text-sm font-semibold text-[var(--card-foreground)]">
                  Video URL
                  <input
                    type="url"
                    name="url"
                    required
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    placeholder="https://www.instagram.com/reel/..."
                    className="mt-2 w-full rounded-[var(--radius)] border border-[var(--input)] bg-[var(--popover)] px-4 py-3 text-sm shadow-[var(--shadow-2xs)] outline-none transition focus:ring-2 focus:ring-[var(--ring)]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isPending}
                  aria-busy={isPending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius)] border border-transparent bg-[var(--primary)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-[var(--shadow-md)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isPending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--primary-foreground)] border-t-transparent" />
                      wait bosdk...
                    </>
                  ) : (
                    "Generate Link"
                  )}
                </button>
              </form>

              <div
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--secondary)] p-4 text-sm text-[var(--secondary-foreground)]"
                aria-live="polite"
              >
                {state?.success ? (
                  <div className="space-y-3">
                    <p className="font-semibold">Ready for download.</p>
                    {state.title ? (
                      <p className="text-sm text-[color:color-mix(in_srgb,var(--secondary-foreground),transparent_35%)]">
                        {state.title}
                      </p>
                    ) : null}
                    {state.thumbnail ? (
                      <div className="overflow-hidden rounded-[calc(var(--radius)-2px)] border border-[var(--border)]">
                        <img
                          src={`/api/thumbnail?url=${encodeURIComponent(state.thumbnail)}`}
                          alt={state.title ?? "Video thumbnail"}
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                    <a
                      className="inline-flex w-full items-center justify-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--card-foreground)] shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                      href={`/api/download?url=${encodeURIComponent(state.originalUrl ?? "")}`}
                    >
                      Download video
                    </a>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="font-semibold">Awaiting a link.</p>
                    <p className="text-sm text-[color:color-mix(in_srgb,var(--secondary-foreground),transparent_35%)]">
                      Submit a URL above to fetch the title, thumbnail, and download link.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--card-foreground),transparent_55%)]">
                <span>FastAPI ready</span>
                <span>Secure fetch</span>
                <span>One link</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
