import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/tabs.css";
import blogs from "../data/Blogs";
import teachingProjects from "../data/TeachingProjects";
import miscellaneousProjects from "../data/MiscellaneousProjects";
import ActivityBox from "../components/Activities/ActivityBox";
import { ProjectsWrapper, ProjectsSection } from "../styles/projectsStyle.js";
import Layout from "../components/layout";

const Activities = () => (
  <Layout>
    <ProjectsWrapper>
      <Tabs>
        <TabList>
          <Tab>Teaching</Tab>
          <Tab>Blog</Tab>
          <Tab>Miscellaneous</Tab>
        </TabList>

        <TabPanel>
          <ProjectsSection>
            {teachingProjects.map((item) => (
              <ActivityBox key={item.id} info={item} />
            ))}
          </ProjectsSection>
        </TabPanel>
        <TabPanel>
          <ProjectsSection>
            {blogs.map((item) => (
              <ActivityBox key={item.id} info={item} />
            ))}
          </ProjectsSection>
        </TabPanel>
        <TabPanel>
          <ProjectsSection>
            {miscellaneousProjects.map((item) => (
              <ActivityBox key={item.id} info={item} />
            ))}
          </ProjectsSection>
        </TabPanel>
      </Tabs>
    </ProjectsWrapper>
  </Layout>
);

export default Activities;
