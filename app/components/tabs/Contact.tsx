import { useLanguage } from "@/app/context/LanguageContext";
import { usePortfolioData } from "@/app/hooks/usePortifolioData";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
    name: string;
    company: string;
    email: string;
    message: string;
}

export default function Contact() {
    const { language } = useLanguage();
    const data = usePortfolioData(language);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false); // Estado para verificar o reCAPTCHA

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isVerified) {
            alert("Please verify you are not a robot.");
            return;
        }

        setLoading(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("name", formData.name);
            formDataObj.append("company", formData.company);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);

            await fetch("https://formspree.io/f/xdkkpgdd", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formDataObj,
            });

            alert("Your message has been sent!");
            setFormData({ name: "", company: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            alert("There was an error sending your message.");
        } finally {
            setLoading(false);
        }
    };

    const handleCaptchaChange = (token: string | null) => {
        if (token) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-blue w-full p-8 my-4 mx-auto md:px-12 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                    <h1 className="font-bold uppercase text-5xl text-white">{data?.contact.title}</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                        name="name"
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder={data?.contact.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="company"
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder={data?.contact.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-5 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder={data?.contact.email}
                    onChange={handleChange}
                    required
                />
                <div className="my-4">
                    <textarea
                        name="message"
                        placeholder={data?.contact.message}
                        className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                {/* Adicionando o reCAPTCHA */}
                <div className="my-4">
                    <ReCAPTCHA
                        sitekey="6LecBbAqAAAAAH54jd8O2ynVbfp_S9cJ-mgjVFo5" // Substitua pela sua "Site Key"
                        onChange={handleCaptchaChange}
                    />
                </div>
                <div className="my-2 bg-white rounded-lg shadow-2xl transition-all ease-in hover:-translate-y-2">
                    <button
                        type="submit"
                        disabled={loading || !isVerified} // Desativa se reCAPTCHA não estiver verificado
                        className={`uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full focus:outline-none focus:shadow-outline ${
                            loading || !isVerified
                                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                : "bg-blue-900 text-gray-100"
                        }`}
                    >
                        {loading ? data?.contact.buttonloading : data?.contact.button}
                    </button>
                </div>
            </div>
        </form>
    );
}
