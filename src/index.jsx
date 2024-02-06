import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Users from './Users'
import Messenger from './Messenger'
import Dialog from './Dialog';

const App = () => {

const [activePanel, setActivePanel] = useState('users');
const [savedUsers, setSavedUsers] = useState([])
const [currentUser, setcurrentUser] = useState('')
const [currentDialog, setCurrentDialog] = useState('')

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('users'));
  setSavedUsers(items);
}, []);



function goToMessenger(user){
  setcurrentUser(user)
  setActivePanel('messenger')
}

function openDialog(id){
  setCurrentDialog(id)
  setActivePanel('dialog')
}

const goBack = React.useCallback(() => {
  history.back()
}, []);


  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View onSwipeBack={goBack}
           activePanel={activePanel}>
            <Panel id="users">
              <PanelHeader  >Saved users</PanelHeader>
              <Users savedUsers={savedUsers} goToMessenger={goToMessenger} />
            </Panel>
            <Panel id="messenger">
              <PanelHeader  before={
              <PanelHeaderBack
                onClick={() => setActivePanel('users')}
              />
            }>Messenger</PanelHeader>
              <Messenger user={currentUser} openDialog={openDialog}/>
            </Panel>
            <Panel id="dialog">
              <PanelHeader  before={
              <PanelHeaderBack
                onClick={() => setActivePanel('messenger')}
              />
            } >Dialog</PanelHeader>
              <Dialog id={currentDialog} user={currentUser}/>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);