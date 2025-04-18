// External libraries
import { Typography, LinearProgress, Stack, Grid } from "@mui/material";

// Components
import Iconify from "@/components/ui/Icon";

// Types
import type { DictionaryType, Skill, SkillType } from "@/types";

// Utilities
import getSkills from "@/utils/requests/getSkills";

const AboutMeSkills = async ({ dictionary }: DictionaryType) => {
  const skillsData = await getSkills();

  return (
    <Stack sx={{ gap: 15 }}>
      {Object.keys(skillsData).map((group: string) => {
        const skillGroup: Skill[] = skillsData[group as SkillType];
        return (
          <Stack key={group} sx={{ marginBottom: 2, gap: 4 }}>
            <Typography variant="h6" component="h3" sx={{ marginBottom: 1, fontWeight: 600 }}>
              {group === "other" ? "" : group.replace(/_/g, ' ').toLocaleUpperCase()}
            </Typography>

            <Grid container spacing={8}>
              {skillGroup.map((skill) => (
                <Grid key={skill.skill_code} size={{ xs: 12, md: 6, lg: 4 }}>
                  <Stack sx={{ gap: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={2} width="100%">
                      <Iconify icon={skill.icon} />
                      <Typography sx={{ fontWeight: 500 }} variant="body1">{skill.skill_title}</Typography>
                      <Typography sx={{ fontWeight: 500, flexGrow: 1, textAlign: 'right' }} variant="body1">{`${skill.progress}%`}</Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={skill.progress}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                      }}
                    />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default AboutMeSkills;