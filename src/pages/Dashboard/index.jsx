import React from "react";
import Header from "../../components/Header";
import { DashboardContainer } from "./style";
import ListaDashboard from '../../components/ListaDashboard/'

export default function Dashboard() {
    return (
        
        <DashboardContainer>
            <Header />    
            <ListaDashboard />
        </DashboardContainer>
        
    )
}