import React from "react";
import { Box, Text } from "ink";

export default function Skills({ skills }) {
	return (
		<Box flexDirection="column" marginBottom={1}>
			<Text bold underline>🛠 Skills</Text>
			{Object.entries(skills).map(([category, items]) => (
				<Box key={category} flexDirection="row" marginTop={0}>
					<Text bold>{category}: </Text>
					<Text> {items.join(", ")}</Text>
				</Box>
			))}
		</Box>
	);
}
