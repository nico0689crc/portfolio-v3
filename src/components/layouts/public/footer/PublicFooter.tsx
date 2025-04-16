// Types
import type { Locale } from "@/configs/i18n"

// Components
import PublicFooterWrapper from "./PublicFooterWrapper"
import PublicFooterBottom from "./footer-bottom/PublicFooterBottom"
import PublicFooterTop from "./footer-top/PublicFooterTop"

type PublicFooterProps = {
  lang: Locale
}

// PublicFooter component
const PublicFooter = async ({ lang }: PublicFooterProps) => (
  <PublicFooterWrapper>
    <PublicFooterTop lang={lang} />
    <PublicFooterBottom lang={lang} />
  </PublicFooterWrapper>
)

export default PublicFooter
