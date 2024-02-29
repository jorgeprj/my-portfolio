import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GridPanel from "@/components/GridPanel";

export default function Home() {
    return (
        <main className="flex flex-1 w-full h-full gap-10 justify-center">
            <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
                <Header />
                <GridPanel />
                <div className="flex pb-6 xl:hidden">
                    <Footer />
                </div>
            </div>

        </main>
    );
}