import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    placeholder='Add Transaction'
                    width={12}
                    label='Description'
                />
                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='100'
                    icon='dollar'
                    iconPosition='left'
                >
                </Form.Input>
            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>
    )
}

export default NewEntryForm