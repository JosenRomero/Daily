import React from 'react';

import { useUser } from '../hooks/useUser';

import Modal from './Modal';
import SectionMain from './SectionMain';
import SectionLeft from './SectionLeft';

const Tasks = () => {

    useUser();

    return <div className="bg-light">

        <div className="container py-3">

            <Modal />

            <div className="row">

                <SectionLeft />
                <SectionMain />

            </div>

        </div>

    </div>
    
}

export default Tasks;

