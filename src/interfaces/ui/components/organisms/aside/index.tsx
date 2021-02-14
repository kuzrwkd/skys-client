import React, { FC } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DynamicFeedTwoToneIcon from '@material-ui/icons/DynamicFeedTwoTone'
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone'
import { useStyles } from './style'
import PropTypes from 'prop-types'
import { Props } from './types'
import { useSelector } from 'react-redux'
import { nikkeiSlice } from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import { reutersSlice } from '@/interfaces/presenters/redux/reducers/rss/reuters'
import { bloombergSlice } from '@/interfaces/presenters/redux/reducers/rss/bloomberg'
import { coinTelegraphSlice } from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'
import NewsFeed from '@/interfaces/ui/components/organisms/newsFeed'

const component: FC<Props> = ({ handleDrawer }) => {
  const classes = useStyles()

  const state = useSelector((state) => state)
  console.log(state)
  const fetchData = {
    nikkei: state[nikkeiSlice.name],
    reuters: state[reutersSlice.name],
    bloomberg: state[bloombergSlice.name],
    coinTelegraph: state[coinTelegraphSlice.name],
  }

  const { nikkei, reuters, bloomberg, coinTelegraph } = fetchData
  const LOGO_HEIGHT = 40
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
      </List>
      <div className={classes.drawerContents}>
        <ul>
          <li>
            <NewsFeed data={nikkei.data} logoHeight={LOGO_HEIGHT}>
              <div>aaa</div>
            </NewsFeed>
          </li>
          <li>lasd</li>
          <li>lasd</li>
          <li>lasd</li>
          <li>lasd</li>
          <li>lasd</li>
          <li>lasd</li>
        </ul>
      </div>
    </aside>
  )
}

component.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
}

export default component
