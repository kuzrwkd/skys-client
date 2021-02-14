import React, { FC } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DynamicFeedTwoToneIcon from '@material-ui/icons/DynamicFeedTwoTone'
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone'
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone'
import { useStyles } from './style'
import PropTypes from 'prop-types'
import { Props } from './types'
import { useSelector } from 'react-redux'
import { newsSlice } from '@/interfaces/presenters/redux/reducers/news'
import NewsFeed from '@/interfaces/ui/components/organisms/newsFeed'
import clsx from 'clsx'

const component: FC<Props> = ({ handleDrawer, drawer }) => {
  const classes = useStyles()

  const state = useSelector((state) => state)

  const fetchData = {
    news: state[newsSlice.name],
  }

  const { news } = fetchData

  return (
    <aside className={classes.drawerMenu}>
      <List className={classes.drawerNav}>
        <ListItem onClick={() => handleDrawer('News')}>
          <ListItemIcon className={classes.listItemIcon}>
            <DynamicFeedTwoToneIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => handleDrawer('YouTube')}>
          <ListItemIcon className={classes.listItemIcon}>
            <SubscriptionsTwoToneIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => handleDrawer('ToDo')}>
          <ListItemIcon className={classes.listItemIcon}>
            <AssignmentTurnedInTwoToneIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      <div className={classes.drawerContents}>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.contents !== 'News',
          })}
        >
          <NewsFeed data={news.data} />
        </div>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.contents !== 'YouTube',
          })}
        >
          YouTube
        </div>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.contents !== 'ToDo',
          })}
        >
          ToDo
        </div>
      </div>
    </aside>
  )
}

component.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
}

export default component
