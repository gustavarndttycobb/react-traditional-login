import { StyledBaseLayoutBox } from "./styles"
interface IBaseLayoutProps {
    readonly children: React.ReactNode
}
function BaseLayout({ children }: IBaseLayoutProps) {
    return <StyledBaseLayoutBox
    >{children}</StyledBaseLayoutBox>
}

export default BaseLayout