import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SidebarOption from './SidebarOption'
import AddIcon from "@material-ui/icons/Add"

import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../firebase'



function Sidebar() {

    const [channels, loading, error] = useCollection(db.collection('roms'))
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>BANCHI TEAMWORK</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Iván Espinoza
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon = {InsertCommentIcon} title="Threads"></SidebarOption>
            <SidebarOption Icon = {InboxIcon} title="Mentions & reactions"></SidebarOption>
            <SidebarOption Icon = {DraftsIcon} title="Saved items"></SidebarOption>
            <SidebarOption Icon = {BookmarkBorderIcon} title="Channel browser"></SidebarOption>
            <SidebarOption Icon = {PeopleAltIcon} title="People & user groups"></SidebarOption>
            <SidebarOption Icon = {AppsIcon} title="Apps"></SidebarOption>
            <SidebarOption Icon = {FileCopyIcon} title="File browser"></SidebarOption>
            <SidebarOption Icon = {ExpandLessIcon} title="Expand less"></SidebarOption>
            <hr />
            <SidebarOption Icon = {ExpandMoreIcon} title="Channel"></SidebarOption>
            <hr />
            <SidebarOption Icon = {AddIcon}  addChannelOption title="Add Channels" />


            {channels?.docs.map((doc) => (
                <SidebarOption 
                    key = {doc.id}
                    id = {doc.id}
                    addChannelOption
                    title={doc.data().name}
                />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`

const SidebarHeader= styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 800;
        margin-bottom: 5px;
    }
    > h3{
        display: flex;
        font-size: 12px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`
