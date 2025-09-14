import React from "react";
import { Box, Text } from "ink";

export default function Education({ education }) {
	return (
		<Box flexDirection="column" marginBottom={1}>
			<Text bold underline>🎓 Education</Text>

			<Box flexDirection="row" justifyContent="space-between" marginTop={1}>
				{/* Left: College + degree */}
				<Text>{education.college} — {education.eduInfo}</Text>

				{/* Right: Duration */}
				<Text>{education.time}</Text>
			</Box>
		</Box>
	);
}
