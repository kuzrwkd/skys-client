export type Props = {
  handleDrawer: (contents: string, menuId: number) => void
  drawer: {
    contents: string
    menuId: number | null
  }
}
