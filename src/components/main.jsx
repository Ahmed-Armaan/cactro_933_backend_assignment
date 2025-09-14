import React from "react";
import { Box } from "ink";
import Personal from "./personal.jsx";
import Education from "./education.jsx";
import Projects from "./projects.jsx";
import Skills from "./skills.jsx";

export default function Main({ data }) {
	return (
		<Box flexDirection="column" width="100%" height="100%" padding={1}>
			<Personal data={data} />
			<Education education={data.education} />
			<Projects projects={data.projects} />
			<Skills skills={data.skills} />
		</Box>
	);
}
