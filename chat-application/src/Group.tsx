import './group.css';
import { useLocation } from 'react-router-dom';
import chatIcon from './assets/chat.svg';
import searchIcon from './assets/search.svg';
import profileIcon from './assets/profile.svg';
import iconIcon from './assets/icon.svg';
import { useState } from 'react';

interface Item{
    id: string;
    name : string;
}


const Group = function(){
    const {state} = useLocation();
    const {userName, friendsList} = state;
    let [selectedOption,setSelectedOption] = useState('chat');
    const handle = (option : string) =>{ 
        setSelectedOption(option);
        //return undefined;
    };

    let groupsList: Item[] = [];

    if(friendsList) groupsList=friendsList;

    let openChat=function(id:string){
        console.log(id);
    }

    return (
        <div id="root2">
            <div id='leftBar' className='d-flex flex-column justify-content-center align-items-center'>
               <div className={`btn top mb-3 btni`}><img src={iconIcon} width="40" height="40"></img></div>
               <div className='d-flex flex-column align-items-center mt-auto'>
               <button className={`btn btni ${selectedOption == 'chat' ? 'selected' : ''}`} onClick={()=>setSelectedOption('chat')}><img src={chatIcon} width="40" height="40"></img></button>
               <button className={`btn btni ${selectedOption == 'search' ? 'selected' : ''}`} onClick={()=>setSelectedOption('search')}><img src={searchIcon} width="50" height="50"></img></button>
               </div>
               <button className={`btn btni bottom mt-auto  ${selectedOption == 'profile' ? 'selected' : ''}`} onClick={()=>setSelectedOption('profile')}><img src={profileIcon} width="50" height="50"></img></button>
            </div>
            <div id='homepage1'>
                <header>
                    <b>Chat</b>
                </header>
                <div id='searchBar'>
                    <input type='text' placeholder='Search' id='search'></input>
                </div>
                <div id='groupslist'>
                    {
                        groupsList.map((item)=>(
                            <button className={'groupList '+item.id} onClick={() => openChat(item.id)}>{item.name}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default  Group;