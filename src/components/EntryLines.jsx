import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({ entries, editEntry }) {
    return (
        <Container>
            {
                entries.map((entry) => (
                    <EntryLine {...entry} id={entry.id} editEntry={editEntry} />
                ))
            }
        </Container>
    )
}

export default EntryLines