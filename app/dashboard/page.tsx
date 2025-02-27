import type { Metadata } from "next";
import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

export const metadata: Metadata = {
    title: "Tracker | Dashboard"
};

const DashboardPage = () => {
    const isAuthenticated = false
    let children = (
        <Login />
    )

    if(isAuthenticated){
        children = (
            <Dashboard />
        )
    }
    return (
        <Main>
            {children}
        </Main>
    );
}
 
export default DashboardPage;