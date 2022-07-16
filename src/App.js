import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntry)
  const [description, setDescription] = useState("")
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
  }, [isOpen])
  
  useEffect(() => {
    let totalIncome = 0
    let totalExpense = 0
    entries.map(entry => {
      if(entry.isExpense){
         return totalExpense += entry.value
      }
         return totalIncome += entry.value
    })
    setTotal(totalIncome-totalExpense)
    setTotalIncome(totalIncome)
    setTotalExpense(totalExpense)
  }, [entries])
  
  
  const addEntry =() => {
    const result = entries.concat({id: entries.length+1, description, value, isExpense})
    setEntries(result)
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
  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
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
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>
      <MainHeader type='h3' title='Add new Transaction' />
      <NewEntryForm 
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
    <ModalEdit 
      isOpen={isOpen} 
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
var initialEntry = [
  {
    id: 1,
    description:"Work Income",
    value : 100000,
    isExpense : false
  },
  {
    id: 2,
    description:"Water Bill",
    value : 20,
    isExpense : true
  },
  {
    id: 3,
    description:"Rent",
    value : 300,
    isExpense : true
  },
  {
    id: 4,
    description:"Power Bill",
    value : 50,
    isExpense: true
  }
]