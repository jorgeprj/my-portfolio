import { ReactNode } from "react"

interface WrapperProps {
    children: ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
        {children}
    </div>
  )
}

export default Wrapper