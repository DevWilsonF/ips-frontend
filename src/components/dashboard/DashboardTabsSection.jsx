import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Nav, NavItem, TabContent, TabPane } from 'reactstrap'

function DashboardTabsSection({ tabs, content, children }) {

  const [currentTab, setCurrentTab] = useState(0)
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()
  const handleTabs = (index) => {
    setCurrentTab(index)
    setEdit(false)
  }
  return (
    <div>
      <Nav tabs>
        {tabs.map((data, index) => <NavItem key={index}>
          <NavLink
            className={'nav-link'}
            to={`${data.url}`}
          >
            {data.info}
          </NavLink>
        </NavItem>)}

        <Button onClick={() => setEdit(!edit)} color={edit ? 'warning' : 'primary'} className='ms-auto'>{edit ? 'Guardar' : 'Editar'}</Button>
      </Nav>

      <TabContent className='pt-5' activeTab={currentTab}>
        {content}

      </TabContent>
    </div>
  )
}

export default DashboardTabsSection