import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Curriculum, Skill } from "../../@types/curriculum";

interface ChipData {
  key: number;
  label: string;
}

interface ChipProps {
  skills: Curriculum["skills"];
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipComponent({ skills }: ChipProps) {
  const [chipData, setChipData] = useState<readonly ChipData[]>([]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  useEffect(() => {
    if (skills) {
      const formattedSkills = skills.map((skill: Skill, index: number) => ({
        key: index,
        label: skill.skill_name,
      }));
      setChipData(formattedSkills);

      console.log(formattedSkills);
    }
  }, [skills]);

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.key}>
            <Chip
              color="primary"
              icon={icon}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
