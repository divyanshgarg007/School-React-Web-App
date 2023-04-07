import React, {useEffect, useState} from 'react'
import {Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Chat, MarkEmailRead, MarkEmailUnread} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import {ActionCreators} from '../../redux/actions'
import {CustomNoDataBox, Loader} from '../../components'
import MyDiv from './messages.style'
import MessageDialog from './components/MessageDialog/messageDialog'
const Messages = (props) => {
  const {t} = useTranslation()
  const [currentID, setCurrentID] = useState()
  const [message, setMessage] = useState()
  const [openDialog, setOpenDialog] = useState(false)

  const globalState = useSelector((state) => state?.globalState)

  useEffect(() => {
    props.actions.getMessageAction()
  }, [])

  useEffect(() => {
    setMessage(globalState?.getMessage?.data?.data?.payload?.list)
  }, [globalState?.getMessage?.data?.data?.payload])

  const handleDialog = (messageID) => {
    let obj = {
      id: messageID,
      is_read: 1,
    }
    setOpenDialog(!openDialog)
    props.actions.postMessageCleanAction(obj)
    const currentMessage = message.filter((data) => data.id === messageID)
    setCurrentID({
      id: currentMessage[0]?.id,
      description: currentMessage[0]?.description,
      email: currentMessage[0]?.email,
      mobile: currentMessage[0]?.mobile,
      name: currentMessage[0]?.name,
      subject: currentMessage[0]?.subject,
    })
  }

  const handleClickDialog = () => {
    setOpenDialog(!openDialog)
  }

  return (
    <MyDiv>
      {(globalState?.getMessage?.loading) &&
      <div>
        <Loader />
      </div>
      }
      {message?.length <= 0 ? <Box pt={7}>
        <CustomNoDataBox className1="icn_btn" startIcon={<Chat />}title2="No Messages found" />
      </Box> : <Box className="messages_box">
        <Typography className="page_title">{t('Messages')}</Typography>
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="title_style">{t('Name')}</TableCell>
                  <TableCell className="title_style">{t('Email')}</TableCell>
                  <TableCell className="title_style">{t('Subject')}</TableCell>
                  <TableCell className="title_style">{t('View')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {message?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.subject}</TableCell>
                    <TableCell>
                      {item.is_read === 0 ? <IconButton className="icon_style2" onClick={() => handleDialog(item.id)}>
                        <MarkEmailUnread />
                      </IconButton> : <IconButton className="icon_style" onClick={() => handleDialog(item.id)}>
                        <MarkEmailRead />
                      </IconButton>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>}
      <MessageDialog currentID={currentID} openDialog={openDialog} handleDialog={handleDialog} handleClickDialog={handleClickDialog} />
    </MyDiv>
  )
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Messages)
