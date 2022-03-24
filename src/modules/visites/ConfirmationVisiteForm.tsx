import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { initialValues } from '@/constants/initialValues'

export default function Confirm() {
  const { cin, nom, prenom, adresse, entreprise } = initialValues
  return (
    <Box>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="Cin"
            secondary={cin.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Nom"
            secondary={nom.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Prenom"
            secondary={prenom.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Adresse"
            secondary={adresse.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Entreprise"
            secondary={entreprise.value || 'Not Provided'}
          />
        </ListItem>

       
      </List>
    </Box>
  )
}
