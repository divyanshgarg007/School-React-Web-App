import React, {useState} from 'react'
import {Box, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import {useTranslation} from 'react-i18next'
import MyDiv from './myProfile.style'
import {Profile, SocialMedia, Languages} from './components'
export default function MyProfile(props) {
  const {t} = useTranslation()
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <MyDiv>
      <Box className="myprofile_box">
        <TabContext value={value}>
          <Box>
            <TabList
              variant="scrollable"
              className="tabs_box"
              scrollButtons
              allowScrollButtonsMobile
              textColor="#262728"
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#1D3160',
                },
              }}
            >
              <Tab className="tab_names" label={t('Profile')} value="1" />
              <Tab className="tab_names" label={t('SocialMedia')} value="2" />
              <Tab className="tab_names" label={t('Languages')} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" className="tab_child"><Profile /></TabPanel>
          <TabPanel value="2" className="tab_child"><SocialMedia /></TabPanel>
          <TabPanel value="3" className="tab_child"><Languages /></TabPanel>
        </TabContext>
      </Box>
    </MyDiv>

  )
}

