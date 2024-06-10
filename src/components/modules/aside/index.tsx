import Footer from "@/components/layout/Footer";
import Profile from "./components/profile";

const Aside = () => {
    return (
        <aside className="flex flex-col gap-8 justify-between p-6 max-w-96 h-fit">
            <Profile />
            <div className="hidden my-6 xl:flex">
                <Footer />
            </div>
        </aside>
    );
}

export default Aside;
