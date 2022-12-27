import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './SelectView.css'

export default function SelectView() {
    return (
        <div className='select-buttons'>
            <Link to='/gantt'>
                <Button variant='primary' size='lg'>
                    Gantt
                </Button>
            </Link>
        </div>
    )
}