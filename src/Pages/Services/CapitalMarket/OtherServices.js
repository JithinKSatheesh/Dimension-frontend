import React from 'react'
import { Link } from 'react-router-dom'

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'
import { ReactComponent as IconShield } from 'Assets/icons/service_shield.svg'
import { ReactComponent as IconManage } from 'Assets/icons/service_manage.svg'
import {ReactComponent as Logo3} from 'Assets/icons/logo_3.svg'
import { formatDate } from 'Utils/time'

import { ServiceDetailsButton } from '../ServiceDetailsButton'

export default function Otherservices(props) {

    const {getServices} = props

    const _date = getServices?.services?.attributes?.updatedAt
    

    return (
        <>
            <div className=" service-wrapper-3">
                <div className="container mx-auto px-4">
                    <div className="pb-36">
                        <div className="mb-6 text-dark-blue font-bold text-2xl xl:text-3xl pb-24">
                           <SlideLeft>
                            Other services
                           </SlideLeft>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                                <Link to="/services/investment-security">
                                    <SlideBottom>

                                    <ServiceDetailsButton
                                        icon={<IconShield className='mr-4' />}
                                        title={"Investment Securities Services"}
                                        onClick={() => { }}
                                        />
                                    </SlideBottom>
                                </Link>
                                <Link to="/services/asset-management">
                                    <SlideBottom>

                                    <ServiceDetailsButton
                                        icon={<IconManage className='mr-4' />}
                                        title={"Asset Management"}
                                        onClick={() => {}}
                                        />
                                    </SlideBottom>
                                </Link>
                                {/* <Link to="/services/capital-market">
                                    <ServiceDetailsButton
                                        icon={<IconHome className='mr-4' />}
                                        title={"Capital Markets Advisory"}
                                        onClick={() => {}}
                                    />
                                </Link> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
