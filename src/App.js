import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useSelector, useDispatch} from 'react-redux'
import { getAllEntries } from './actions/entries.actions';
function App() {
  
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const {isOpen, id} = useSelector(state => state.modals)
  const entries = useSelector(state => state.entries)
  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
  }, [isOpen, id, entries]) 
  
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

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllEntries())
  }, [dispatch])
  
  
  return (
   <Container>
    <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size='small'/>
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <MainHeader type='h3' title='History' />
      <EntryLines entries={entries} />
      <MainHeader type='h3' title='Add new Transaction' />
      <NewEntryForm />
    <ModalEdit 
      isOpen={isOpen} 
      {...entry}
    />
   </Container>
  );
}

export default App;