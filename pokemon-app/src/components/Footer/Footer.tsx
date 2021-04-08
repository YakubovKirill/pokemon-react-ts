import React from 'react'

import '../../styles/footer.scss'

const CREATED_BY_LABLE = 'Created by YakubovKirill and MBicycle'

const Footer: React.FC = () => (
    <footer className='f-c'>
        <div className='label'>{CREATED_BY_LABLE}</div>
    </footer>
)

export default Footer
