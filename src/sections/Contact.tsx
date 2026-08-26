import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjybnnyj");

  return (
    <section
      id="contact"
      className="border-t border-[#241F1B] bg-[#0D0C0B] px-6 py-28"
    >
      <div className="mx-auto max-w-3xl">

        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
          Contact
        </p>

        <h2 className="mt-5 text-4xl font-black text-[#F7F3ED] md:text-5xl">
          Let's build something useful.
        </h2>

        <p className="mt-5 text-[#BEB5AC]">
          Have an AI, machine-learning, automation, robotics, or engineering opportunity?
          Send me a message.
        </p>

        {state.succeeded ? (
          <div className="mt-10 rounded-xl border border-[#E87524]/40 bg-[#151210] p-6">
            <p className="font-semibold text-[#F7F3ED]">
              Message sent successfully.
            </p>

            <p className="mt-2 text-sm text-[#BEB5AC]">
              Thank you. I will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
          >

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#D8D0C7]"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-[#332A24] bg-[#151210] px-4 py-3 text-[#F7F3ED] outline-none transition focus:border-[#E87524]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#D8D0C7]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-[#332A24] bg-[#151210] px-4 py-3 text-[#F7F3ED] outline-none transition focus:border-[#E87524]"
                placeholder="you@example.com"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#D8D0C7]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-[#332A24] bg-[#151210] px-4 py-3 text-[#F7F3ED] outline-none transition focus:border-[#E87524]"
                placeholder="Tell me about your project or opportunity..."
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-xl bg-[#E87524] px-6 py-3.5 font-bold text-white transition hover:bg-[#FF8A32] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}