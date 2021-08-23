import React from 'react';

import { useUser } from '../hooks/useUser';

import Modal from '../components/Modal';
import SectionMain from '../components/SectionMain';
import SectionLeft from '../components/SectionLeft';

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
