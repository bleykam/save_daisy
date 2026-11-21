import React, { useState } from 'react';
import ContainerTop from "./top_container.jsx";
import SmallBusiness from'./smallbusiness.jsx'

export default function HomePage() {
    return (
        <div className="App w-100">
            <SmallBusiness />
            <ContainerTop />
        </div>
    );
}