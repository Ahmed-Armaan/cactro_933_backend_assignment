import React from "react";
import { Box, Text } from "ink";

export default function Projects({ projects }) {
	return (
		<Box flexDirection="column" marginBottom={1}>
			<Text bold underline>💻 Projects</Text>

			{Object.entries(projects).map(([name, project]) => (
				<Box
					key={name}
					flexDirection="row"
					justifyContent="space-between"
					marginTop={1}
				>
					{/* Left: Project description */}
					<Box flexDirection="column">
						<Text bold>{name}</Text>
						<Text>{project.desc}</Text>
					</Box>

					{/* Right: Tech stack */}
					<Box flexDirection="column" alignItems="flex-end">
						<Text>{project.stack.join(", ")}</Text>
					</Box>
				</Box>
			))}
		</Box>
	);
}
