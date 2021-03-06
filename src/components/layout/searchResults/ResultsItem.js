import React, { Fragment } from 'react'

import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline'
  },
  green: {
    color: '#4dca19'
  }
}))

const ResultsItem = ({ title, release, avatar, id, getMovie }) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className="article">
        <ListItem>
          <ListItemAvatar>
            <Avatar
              style={{ 
                cursor: 'pointer'}}
              alt={title}
              src={avatar}
              onClick={() => getMovie(id)}
              onError={e => {
                e.target.onerror = null
                e.target.src = './no_image.png'
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  {release}
                </Typography>                             
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction onClick={() => getMovie(id)}>
            <IconButton edge='end' aria-label='delete'>
              <OpenInNewIcon
                className={classes.green}
              />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div> 
      <Divider variant='inset' component='li' />
    </Fragment>
  )
}

export default ResultsItem
