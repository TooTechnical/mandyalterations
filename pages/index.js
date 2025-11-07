import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center text-olive">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-cream">
        <img
          src="/hero.jpg"
          alt="Vintage Singer Sewing Machine"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10">
          <h1 className="font-script text-6xl mb-3 text-brass drop-shadow-md">
            Mandy’s Alterations
          </h1>
          <p className="text-lg font-serif">
            “Every stitch tells a story.”
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-cream text-olive">
        <h2 className="text-3xl font-script text-brass mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
          {[
            { icon: "hems.svg", title: "Hems", desc: "Perfect lengths every time." },
            { icon: "repairs.svg", title: "Repairs", desc: "From tears to zippers, we fix it all." },
            { icon: "custom.svg", title: "Custom Fits", desc: "Tailoring that flatters your shape." }
          ].map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-brass rounded-xl bg-white shadow-md"
            >
              <img src={`/icons/${s.icon}`} alt={s.title} className="mx-auto mb-4 h-12" />
              <h3 className="text-xl font-serif mb-2">{s.title}</h3>
              <p className="text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-dustyrose text-cream">
        <h2 className="text-3xl font-script mb-8">Happy Clients</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Sarah", "Deirdre", "Eileen"].map((name) => (
            <div key={name} className="bg-paper bg-cover p-6 w-64 border-2 border-brass rounded-lg shadow-lg">
              <p className="italic">“Mandy saved my wedding dress! Absolute perfection.”</p>
              <p className="mt-3 text-sm font-semibold text-brass">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-olive text-cream">
        <h2 className="text-3xl font-script mb-4">Contact</h2>
        <p>Call us at <span className="font-bold">087-555-1234</span></p>
        <p>or visit us at <span className="font-bold">Main Street, Belmullet</span></p>
      </section>
    </div>
  );
}
