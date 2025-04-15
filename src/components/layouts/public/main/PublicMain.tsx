import type { ChildrenType } from "@/@core/types"
import { Stack } from "@mui/material"
import ContainerCommon from "@/components/layouts/public/common/ContainerCommon"

const PublicMain = (props: ChildrenType) => (
  <Stack 
    component="main"
    sx={{
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      p: "1rem",
    }}
  >
    <ContainerCommon>
      {props.children}
    </ContainerCommon>
  </Stack>
)

export default PublicMain