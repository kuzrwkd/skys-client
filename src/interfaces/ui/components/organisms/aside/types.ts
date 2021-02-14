export type Props = {
  handleDrawer: (contents: string, menuId: number) => void
  drawer: {
    isOpen: boolean
    contents: string
    menuId: number | null
  }
}
