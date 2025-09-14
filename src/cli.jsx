#!/usr/bin/env node
import React, { useEffect } from "react";
import { render, Box, Text } from "ink";
import ResumeBuilder from "./getResume";
import Main from "./components/main";

function Resume() {
	const data = ResumeBuilder();
	return (
		<Main data={data} />
	);
}

render(<Resume />);
