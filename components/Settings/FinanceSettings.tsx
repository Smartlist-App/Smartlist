import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function AppearanceSettings() {
	const [financePlan, setFinancePlan] = useState<
		"short-term" | "medium-term" | "long-term"
	>("short-term");
	return (
		<>
			<Box
				sx={{
					py: 1,
					px: {
						sm: 10
					}
				}}
			>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					// value={value}
					// onChange={handleChange}
				>
					<ListSubheader sx={{ background: "transparent" }}>
						Finance plan
					</ListSubheader>
					{[
						{
							s: "short-term",
							n: "Short term",
							d:
								"Save money for to acheive a certain goal in a quick period of time"
						},
						{
							s: "medium-term",
							n: "Medium term",
							d:
								"Save money for to acheive a set of goals in a moderate period of time"
						},
						{
							s: "long-term",
							n: "Long term",
							d:
								"Save money for for education/retirement in a lenient period of time"
						}
					].map((plan: any) => (
						<ListItem
							onClick={() => setFinancePlan(plan.s)}
							secondaryAction={
								<Radio
									edge="end"
									onChange={() => setFinancePlan(plan.s)}
									checked={financePlan === plan.s}
								/>
							}
							disablePadding
						>
							<ListItemButton sx={{ borderRadius: 4, transition: "none" }}>
								<ListItemText secondary={plan.d} primary={plan.n} />
							</ListItemButton>
						</ListItem>
					))}
				</RadioGroup>
				<ListSubheader sx={{ background: "transparent" }}>
					Budgeting
				</ListSubheader>
				<ListItem>
					<ListItemText
						primary={
							<TextField
								fullWidth
								size="small"
								defaultValue={100}
								label="My budget"
								id="outlined-start-adornment"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">$</InputAdornment>
									)
								}}
							/>
						}
					/>
				</ListItem>
				<ListSubheader sx={{ background: "transparent" }}>Other</ListSubheader>
				<ListItem disablePadding>
					<ListItemButton sx={{ borderRadius: 4, transition: "none" }}>
						<ListItemText
							secondary="Switch to another bank account. This will delete any previous transactions"
							primary="Switch bank account"
						/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{ borderRadius: 4, transition: "none" }}>
						<ListItemText
							secondary="This will disable Smartlist Finances and budgeting, however, you'll be able to access lessons."
							primary="Unlink bank account"
						/>
					</ListItemButton>
				</ListItem>
			</Box>
		</>
	);
}