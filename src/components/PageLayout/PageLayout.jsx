import { Section, SectionsContainer } from "react-fullpage";
import './PageLayout.scss';
import Home from "../../pages/Home";
import PartOne from "../../pages/PartOne";
import PartThree from "../../pages/PartThree";
import PartTwo from "../../pages/PartTwo";
import Header from "../Header";
import { useState } from "react";

function PageLayout() {
    const [options, setOptions] = useState({
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
    });

    return (
        <div className="layout__container">  
            <Header />
            <SectionsContainer {...options}>
                <Section>
                    <Home setOptions={setOptions} options={options} />
                </Section>
                <Section>
                    <PartOne />
                </Section>
                <Section>
                    <PartTwo />
                </Section>
                <Section>
                    <PartThree />
                </Section>
            </SectionsContainer>
        </div>
    );
}
export default PageLayout;