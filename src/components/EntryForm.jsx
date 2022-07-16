import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({
    description, value, isExpense, setDescription, setValue, setIsExpense
}) {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    placeholder='Add Transaction'
                    width={12}
                    label='Description'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='100'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                >
                </Form.Input>
            </Form.Group>
            <Segment compact>
                <Checkbox
                    slider
                    label="is Expense"
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </Fragment>
    )
}

export default EntryForm