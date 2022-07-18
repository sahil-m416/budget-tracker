import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useSelector} from 'react-redux'
function App() {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const isOpenRedux = useSelector(state => state.modals.isOpen)
  const entries = useSelector(state => state.entries)
  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      // // setEntries(newEntries)
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  
  useEffect(() => {
    let totalIncome = 0
    let totalExpense = 0
    entries.map(entry => {
      if(entry.isExpense){
         return totalExpense += Number(entry.value)
      }
         return totalIncome += Number(entry.value)
    })
    setTotal(totalIncome-totalExpense)
    setTotalIncome(Number(totalIncome))
    setTotalExpense(Number(totalExpense))
  }, [entries])



  const addEntry =() => {
    // const result = entries.concat({id: entries.length+1, description, value, isExpense})
    // // setEntries(result)
    resetEntry()
  }
  
  const editEntry = (id) => {
    console.log(`Edit entry with the id ${id}`) 
    if(id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }

  
  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
   <Container>
    <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size='small'/>
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <MainHeader type='h3' title='History' />
      <EntryLines entries={entries} editEntry={editEntry}/>
      <MainHeader type='h3' title='Add new Transaction' />
      <NewEntryForm 
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
    <ModalEdit 
      isOpen={isOpenRedux} 
      setIsOpen={setIsOpen} 
      addEntry={addEntry}
      description={description}
      value={value}
      isExpense={isExpense}
      setValue={setValue}
      setDescription={setDescription}
      setIsExpense={setIsExpense}
    />
   </Container>
  );
}

export default App;