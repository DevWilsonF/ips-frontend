import { useState } from 'react'
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

function DashboardTabsSection({ tabs, content, children }) {
  
  const [currentTab, setCurrentTab] = useState(0)
  const [edit, setEdit] = useState(false)
  const handleTabs=(index)=>{
    setCurrentTab(index)
    setEdit(false)
  }
  return (
    <div>
      <Nav tabs>
        {tabs.map((data, index) => <NavItem key={index}>
          <NavLink 
            className={index==currentTab?'active':''}
            onClick={()=>{handleTabs(index)}}
          >
            {data}
          </NavLink>
        </NavItem>)}

        <Button onClick={()=>setEdit(!edit)} color={edit?'warning':'primary'} className='ms-auto'>{edit?'Guardar':'Editar'}</Button>
      </Nav>
      
      <TabContent activeTab={currentTab}>
        {content.map((value,index)=>
        <TabPane tabId={index} key={index}>
          {value}
        </TabPane>)}
        
      </TabContent>
    </div>
  )
}

export default DashboardTabsSection