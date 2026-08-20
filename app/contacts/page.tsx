export default function ContactContent() {
  return (
    <main className="bg-orange-50 px-5 py-4">
      <div className="mx-[490px] max-w-2xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Us ✉️
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            We would love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">

          {/* Name */}
          <div className="mb-4">
            <label className="mb-2 block text-xs font-semibold text-gray-600">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-orange-100 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-orange-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-2 block text-xs font-semibold text-gray-600">
              Your Email
            </label>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-orange-100 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-orange-400"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="mb-2 block text-xs font-semibold text-gray-600">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-orange-100 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-orange-400"
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label className="mb-2 block text-xs font-semibold text-gray-600">
              Message
            </label>

            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full resize-none rounded-lg border border-orange-100 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-orange-400"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-orange-500 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Send Message 📩
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-5 grid grid-cols-3 gap-3">

          {/* Address */}
          <div className="rounded-xl border border-orange-100 bg-white p-5 text-center">
            <div className="mb-2 text-xl">📍</div>

            <p className="text-[10px] text-gray-400">
              Address
            </p>

            <h3 className="mt-1 text-xs font-bold text-gray-800">
              Chennai, Tamil Nadu
            </h3>
          </div>

          {/* Phone */}
          <div className="rounded-xl border border-orange-100 bg-white p-5 text-center">
            <div className="mb-2 text-xl">📞</div>

            <p className="text-[10px] text-gray-400">
              Phone
            </p>

            <h3 className="mt-1 text-xs font-bold text-gray-800">
              +91 98765 43210
            </h3>
          </div>

          {/* Hours */}
          <div className="rounded-xl border border-orange-100 bg-white p-5 text-center">
            <div className="mb-2 text-xl">⏱️</div>

            <p className="text-[10px] text-gray-400">
              Hours
            </p>

            <h3 className="mt-1 text-xs font-bold text-gray-800">
              9 AM – 10 PM
            </h3>
          </div>

        </div>

      </div>
    </main>
  );
}