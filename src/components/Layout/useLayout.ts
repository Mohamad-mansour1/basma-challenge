export interface LayoutProps {
  children: React.ReactNode
}

export const useLayout = (props: LayoutProps) => {
  return {
    ...props,
  }
}
