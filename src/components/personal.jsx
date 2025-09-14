import React from "react";
import { Box, Text } from "ink";

export default function Personal({ data }) {
	return (
		<Box flexDirection="column" marginBottom={2} width="100%" alignItems="center">
			<Text bold color="green">{data.Name}</Text>
			<Box flexDirection="row" justifyContent="center" marginTop={1}>
				<Box marginRight={4}>
					<Text>{data.contacts.email}</Text>
				</Box>
				<Box marginRight={4}>
					<Text url={data.contacts.github}>{data.contacts.github}</Text>
				</Box>
				<Box marginRight={4}>
					<Text url={data.contacts.linkedin}>{data.contacts.linkedin}</Text>
				</Box>
				<Box>
					<Text>{data.contacts.phone}</Text>
				</Box>
			</Box>
		</Box>
	);
}
