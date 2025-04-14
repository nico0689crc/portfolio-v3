import type { ChildrenType } from "@/@core/types"
import PublicFooter from "@/components/layouts/public/footer/PublicFooter"
import PublicHeader from "@/components/layouts/public/header/PublicHeader"
import PublicMain from "@/components/layouts/public/main/PublicMain"
import PublicLayout from "@/components/layouts/public/PublicLayout"


const Layout = (props: ChildrenType) => (
  <PublicLayout
    header={<PublicHeader />} 
    main={
      <PublicMain>
        {props.children}
      </PublicMain>
    }
    footer={<PublicFooter />}
  />
)

export default Layout