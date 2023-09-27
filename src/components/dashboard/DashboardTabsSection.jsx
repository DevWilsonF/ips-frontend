import react ,{ useState } from 'react'
import { Card} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Nav, NavItem, TabContent, TabPane } from 'reactstrap'

function DashboardTabsSection({ tabs, content, children }) {

  const [currentTab, setCurrentTab] = useState(tabs[0].info)
  console.log(tabs[0].info)

  return (
    
    
      <Card >
        <br />
        <Nav tabs className='m-2'>
          {tabs.map((data, index) => <NavItem key={index}>
            <NavLink
              className={'nav-link'}
              to={`${data.url}`}
              onClick={() => setCurrentTab(index)}
            >
              {data.info}
            </NavLink>
          </NavItem>)}

          
        </Nav>
        <Card.Body>
        <TabContent className='pt-5' activeTab={currentTab}>
          {content}
        </TabContent>
        </Card.Body>
      </Card>
    
  )
}

export default DashboardTabsSection