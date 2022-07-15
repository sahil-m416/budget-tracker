import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
   <Container>
    <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value='$12390' size='small'/>
      <DisplayBalances />
      <MainHeader type='h3' title='History' />
      <EntryLine description="income" value="300" />
      <EntryLine description="expense" value="40" isExpense="true" />
      <MainHeader type='h3' title='Add new Transaction' />
      <NewEntryForm />
   </Container>
  );
}

export default App;
