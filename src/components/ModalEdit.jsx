import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import { closeEditModal } from '../actions/modals.actions'
import EntryForm from './EntryForm'

function ModalEdit({ isOpen, description, value, isExpense, setValue, setDescription, setIsExpense }) {
    const dispatch = useDispatch()
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => dispatch(closeEditModal())} positive>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit