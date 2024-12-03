import InfoCard from "./components/InfoCard";


export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row lg:h-screen w-screen justify-center items-center gap-[30px] font-[family-name:var(--kanit-font)] p-30 lg:p-0">
            {/* Info Card */}
            <InfoCard />
            {/* Main Card */}
            <div className="bg-light rounded-3xl shadow-3xl w-100 lg:w-[990px] lg:h-5/6 h-[400px]">

            </div>
        </div>
    );
}
