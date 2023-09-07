import { useEffect, useState } from 'react'
import DashboardSection from '../../components/dashboard/DashboardSection'
import FilterData from '../../components/dashboard/FilterData'
import DataTable from '../../components/dashboard/DataTable'
import Loading from '../../components/Loading';

function DefaultBasePage({ title, addBtnTitle, filterParameters, tableTitles, orderDataTable, actionsTableButton, fetchDataFunction, postDataFunction, formModal: FormModal }) {
  const [modalStatus, setModal] = useState(false);
  const [data, setData] = useState([])
  const [tableData, setTableData] = useState([])
  const [loading, setloading] = useState(true)


  const toggle = () => setModal(!modalStatus);
  const filter = ({ text, filterValue }) => {
    setTableData(text == '' ? data : data.filter((obj) => obj[filterValue].toString().toLowerCase().includes(text.toLowerCase())))
  }
  const fetchData = async () => {
    setloading(true)

    let data = await fetchDataFunction()
    let newData = data.map((obj) => {
      const newObj = {}
      orderDataTable.forEach(element => {
        if (Object.keys(obj).includes(element)) {
          newObj[element] = obj[element]


        }

      })
      return newObj


    })
    setData(newData)
    setTableData(newData)
    setloading(false)

  }
  const postData = async (data) => {
    let response = await postDataFunction(data)
    toggle()
    fetchData()
  }
  useEffect(() => {

    fetchData()


  }, [])

  return (
    <>

      <FormModal toggle={toggle} modal={modalStatus} onClick={postData} />

      <DashboardSection title={title} header={
        addBtnTitle != null && <button onClick={toggle} className='btn btn-success'>{addBtnTitle}</button>}>



        <Loading loading={loading}>
          {tableData.length == 0 ? '' : <FilterData onFilter={filter} filterParameters={filterParameters} />
          }

          <DataTable titles={tableTitles} data={tableData} actions={(id) => actionsTableButton(id)} />

        </Loading>


      </DashboardSection>
    </>
  )
}

export default DefaultBasePage