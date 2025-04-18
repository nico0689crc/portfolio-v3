import type { DictionaryType } from "@/types";
import AboutMeWrapper from "./AboutMeWrapper";
import AboutMeHeader from "./header/AboutMeHeader";
import { AboutMeBody, AboutMeContent, AboutMeSkills } from "./body";
import SkillsWrapper from "./SkillsWrapper";
import SkillsHeader from "./header/SkillsHeader";

const AboutMeView = ({ dictionary }: DictionaryType) => (
  <>
    <AboutMeWrapper>
      <AboutMeHeader dictionary={dictionary} />
      <AboutMeBody>
        <AboutMeContent dictionary={dictionary} />
      </AboutMeBody>
    </AboutMeWrapper>
    <SkillsWrapper>
      <SkillsHeader dictionary={dictionary} />
      <AboutMeSkills />
    </SkillsWrapper>
  </>
)

export default AboutMeView;