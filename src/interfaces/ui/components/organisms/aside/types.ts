export type Props = {
  handleDrawer: (contents: string) => void
  drawer: {
    isOpen: boolean
    contents: string
  }
}
