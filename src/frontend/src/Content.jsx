
import React, { useState } from 'react'
import Stages from './Stages'
import CurrentPipeline from './CurrentPipeline'
import Home from './Home'
import Upload from './Upload';
import { Breadcrumb } from '@fluentui/react-northstar';
import { ChevronEndMediumIcon } from '@fluentui/react-icons-northstar'


export default function Content(props) {

    const [selectedMenuItem, setSelectedMenuItem] = useState("HOME");
    const [breadCrumbItems, setBreadCrumbItems] = useState([])

    const onBreadcrumbHome = () => {
        setSelectedMenuItem("HOME")
        setBreadCrumbItems([])
    }

    const onSelectContent = (content) => {
        console.log(content.currentTarget.id)
        switch (content.currentTarget.id) {
            case 'CONFIGURE_PIPELINE':
                setSelectedMenuItem('CONFIGURE_PIPELINE')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'Configure Pipeline', key: 'CONFIGURE_PIPELINE' })
                setBreadCrumbItems(breadCrumbItems)
                break
            case 'CURRENT_PIPELINE':
                setSelectedMenuItem('CURRENT_PIPELINE')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'View Pipeline', key: 'CURRENT_PIPELINE' })
                setBreadCrumbItems(breadCrumbItems)
                break
            case 'UPLOAD_DOCUMENTS':
                setSelectedMenuItem('UPLOAD_DOCUMENTS')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'Upload Documents', key: 'UPLOAD_DOCUMENTS' })
                setBreadCrumbItems(breadCrumbItems)
                break
            default:
                break;
        }
    }

    const renderContent = () => {
        switch (selectedMenuItem) {
            case 'HOME':
                return (<Home onClick={onSelectContent} theme={props.theme} />)
            case 'CURRENT_PIPELINE':
                return (<CurrentPipeline theme={props.theme} />)
            case 'CONFIGURE_PIPELINE':
                return (<Stages theme={props.theme} onSelectContent={onSelectContent} />)
            case 'UPLOAD_DOCUMENTS':
                return (<Upload theme={props.theme} />)

            default:
                return (<Home />)
        }
    }

    const renderBreadcrumb = () => {
        switch (selectedMenuItem) {
            case 'HOME':
                return (
                    <Breadcrumb >
                        <Breadcrumb.Item style={{paddingLeft: "0px"}}>
                            Home
                        </Breadcrumb.Item>
                    </Breadcrumb>)
            case 'CURRENT_PIPELINE':
                return (
                    <>
                        <Breadcrumb >
                            <Breadcrumb.Item style={{paddingLeft: "0px"}}>
                                <Breadcrumb.Link href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb.Divider>
                        <ChevronEndMediumIcon />
                        </Breadcrumb.Divider>
                        <Breadcrumb.Item>
                            Create Pipeline
                        </Breadcrumb.Item>
                    </>)
            case 'CONFIGURE_PIPELINE':
                return (
                    <>
                        <Breadcrumb >
                            <Breadcrumb.Item style={{paddingLeft: "0px"}}>
                                <Breadcrumb.Link href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb.Divider>
                        <ChevronEndMediumIcon />
                        </Breadcrumb.Divider>
                        <Breadcrumb.Item>
                            View Pipeline
                        </Breadcrumb.Item>
                    </>)
            case 'UPLOAD_DOCUMENTS':
                return (<>
                    <Breadcrumb >
                        <Breadcrumb.Item style={{paddingLeft: "0px"}}>
                            <Breadcrumb.Link  href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb.Divider>
                    <ChevronEndMediumIcon />
                    </Breadcrumb.Divider>
                    <Breadcrumb.Item>
                        Ingest Documents
                    </Breadcrumb.Item>
                </>)

            default:
                return (<Home />)
        }
    }

    return (
        <div className="content" >
            <div style={{ paddingLeft: "0px", paddingTop: "50px", maxWidth: "1000px", minWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
                {renderBreadcrumb()}
                {renderContent()}
            </div>
        </div>
    )

}