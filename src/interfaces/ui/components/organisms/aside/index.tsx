import React, { FC } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { useStyles } from './style'
import PropTypes from 'prop-types'
import { Props } from './types'
import { useSelector } from 'react-redux'
import { newsSlice } from '@/interfaces/presenters/redux/reducers/news'
import { youtubeSlice } from '@/interfaces/presenters/redux/reducers/youtube'
import Feed from '@/interfaces/ui/components/molecules/feed'
import clsx from 'clsx'
import { ASIDE_MENU_ID } from '@/utils/constants/ids'

const component: FC<Props> = ({ handleDrawer, drawer }) => {
  const classes = useStyles()

  const state = useSelector((state) => state)

  const fetchData = {
    news: state[newsSlice.name],
    youtube: state[youtubeSlice.name],
  }

  const { news, youtube } = fetchData
  const {
    asideNewsId,
    asideYoutubeId,
    asideTodoId,
    asideEventsId,
    asideSettingsId,
  } = ASIDE_MENU_ID

  return (
    <aside className={classes.drawerMenu}>
      <List className={classes.drawerNav}>
        <ListItem onClick={() => handleDrawer('ニュース', asideNewsId)}>
          <ListItemIcon className={classes.listItemIcon}>
            <DynamicFeedOutlinedIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => handleDrawer('YouTube', asideYoutubeId)}>
          <ListItemIcon className={classes.listItemIcon}>
            <SubscriptionsOutlinedIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => handleDrawer('タスク管理', asideTodoId)}>
          <ListItemIcon className={classes.listItemIcon}>
            <AssignmentTurnedInOutlinedIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => handleDrawer('イベント', asideEventsId)}>
          <ListItemIcon className={classes.listItemIcon}>
            <EventOutlinedIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => handleDrawer('設定', asideSettingsId)}>
          <ListItemIcon className={classes.listItemIcon}>
            <SettingsOutlinedIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
      </List>
      <div className={classes.drawerContents}>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.menuId !== asideNewsId,
          })}
        >
          <Feed data={news.data} />
        </div>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.menuId !== asideYoutubeId,
          })}
        >
          <Feed data={youtube.data} itemSize={240} thumbnail={'middle'} />
        </div>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.menuId !== asideTodoId,
          })}
        >
          タスク管理
        </div>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.menuId !== asideEventsId,
          })}
        >
          イベント
        </div>
        <div
          className={clsx(classes.drawerMenu, {
            [classes.drawerMenuHide]: drawer.menuId !== asideSettingsId,
          })}
        >
          設定
        </div>
      </div>
    </aside>
  )
}

component.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
}

export default component
