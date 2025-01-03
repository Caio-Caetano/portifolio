import { useLanguage } from "@/app/context/LanguageContext";
import { usePortfolioData } from "@/app/hooks/usePortifolioData";
import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

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
    // const [captchaVerified, setCaptchaVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const handleCaptcha = (value: any) => {
    //     setCaptchaVerified(!!value);
    // };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // if (!captchaVerified) {
        //     alert("Please complete the CAPTCHA to submit the form.");
        //     return;
        // }

        setLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/xdkkpgdd", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Your message has been sent!");
                setFormData({ name: "", email: "", message: "", company: "" });
                // setCaptchaVerified(false);
            } else {
                alert("Failed to send the message. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
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
                <div className="my-2 bg-white rounded-lg shadow-2xl transition-all ease-in hover:-translate-y-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                    >
                        {loading ? data?.contact.buttonloading : data?.contact.button}
                    </button>
                </div>
            </div>
        </form>
    );
}