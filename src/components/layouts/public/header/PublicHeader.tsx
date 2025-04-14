import ContainerCommon from "@/components/layouts/public/common/ContainerCommon"
import PublicHeaderStyled from "./PublicHeaderStyled"
import Logo from "../common/logo/Logo"
import PublicNavigation from "./navigation/PublicNavigation"
import PublicSocial from "./social/PublicSocial"
import PublicActions from "./actions/PublicActions"

const PublicHeader = () => (
  <PublicHeaderStyled>
    <ContainerCommon
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 10
      }}
    >
      <Logo />
      <PublicNavigation />
      <PublicSocial />
      <PublicActions />
    </ContainerCommon>
  </PublicHeaderStyled>
)

export default PublicHeader