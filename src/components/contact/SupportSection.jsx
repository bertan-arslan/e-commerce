import { Phone, MapPin, Mail } from "lucide-react";

export default function SupportSection() {
  return (
    <section className="font-[Montserrat] text-center py-16 px-4">
      <p className="uppercase text-sm text-gray-500 font-semibold">
        Visit our office
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] my-4 leading-snug">
        We help small businesses <br /> with big ideas
      </h2>

      <div className="mt-12 px-5 flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 rounded shadow-md min-h-[393px]">
          <Phone className="text-[#00AEEF]" size={36} />
          <div className="text-sm text-[#252B42] text-center">
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
          </div>
          <p className="font-semibold text-[#252B42]">Get Support</p>
          <button className="mt-2 px-6 py-2 text-[#00AEEF] border border-[#00AEEF] rounded-full hover:bg-[#00AEEF] hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 bg-[#252B42] text-white rounded shadow-md min-h-[393px]">
          <MapPin className="text-[#00AEEF]" size={36} />
          <div className="text-sm text-white text-center">
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
          </div>
          <p className="font-semibold">Get Support</p>
          <button className="mt-2 px-6 py-2 text-[#00AEEF] border border-[#00AEEF] rounded-full hover:bg-[#00AEEF] hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 rounded shadow-md min-h-[393px]">
          <Mail className="text-[#00AEEF]" size={36} />
          <div className="text-sm text-[#252B42] text-center">
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
          </div>
          <p className="font-semibold text-[#252B42]">Get Support</p>
          <button className="mt-2 px-6 py-2 text-[#00AEEF] border border-[#00AEEF] rounded-full hover:bg-[#00AEEF] hover:text-white transition">
            Submit Request
          </button>
        </div>
      </div>
    </section>
  );
}
