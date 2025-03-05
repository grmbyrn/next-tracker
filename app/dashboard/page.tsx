import type { Metadata } from "next";
import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
    title: "Tracker | Dashboard"
};

const DashboardPage = () => {
    return (
        <Main>
            <Dashboard />
        </Main>
    );
}
 
export default DashboardPage;