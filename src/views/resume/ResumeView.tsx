import type { DictionaryType, LangParamType } from "@/types"
import ResumeWrapper from "./ResumeWrapper"
import ResumeHeader from "./header/ResumeHeader";
import ResumeBody from "./body/ResumeBody";
import getResume from "@/utils/requests/getResume";

const ResumeView = async ({ dictionary, lang }: DictionaryType & LangParamType) => {
  const data = await getResume();

  return (
    <ResumeWrapper>
      <ResumeHeader dictionary={dictionary} />
      <ResumeBody data={data[lang]} dictionary={dictionary} lang={lang} />
    </ResumeWrapper>
  )
}

export default ResumeView