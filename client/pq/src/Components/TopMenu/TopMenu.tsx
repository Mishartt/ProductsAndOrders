'use client'
import './TopMenu.scss'
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import io from 'socket.io-client';

const TopMenu = () => {
    const [currentTime, setCurrentTime] = useState<null | Date>(null);
    const [activeSessions, setActiveSessions] = useState(0);

    
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },[])

    useEffect(() => {
        const socket:Socket = io(process.env.SOCKET_URL||'http://localhost:5500');

        socket.on('activeUsers', (count:number) => {
            setActiveSessions(count);
        })

        return () => {
            socket.disconnect()
        }
        
    },[])

    if(!currentTime) return <div className="top-menu">Loading...</div>

    return(
        <div className="top-menu">
            <div className="top-menu-date">
                <div className="top-menu__day">{days[currentTime.getDay()]}</div>
                <div className="top-menu__cuurDate">{currentTime.toLocaleDateString()}</div>
            </div>
            <div className="top-menu__time">
                <span>🕐{currentTime.toLocaleTimeString()}</span>
            </div>
           
            <div className="top-menu-sessions">👥{activeSessions}</div>
        </div>
    )
}

export default TopMenu