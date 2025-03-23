'use client'
import { useAuth } from "@/context/AuthContext";
import Calendar from "./Calendar";
import React, {useEffect, useState} from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Login from "./Login";
import Loading from "./Loading";

const Dashboard = () => {
    const {currentUser, userDataObj, setUserDataObj, loading} = useAuth()
    const [data, setData] = useState({})
    const now = new Date()

    function countValues(){
        let total_number_of_days = 0
        let sum_moods = 0
        for(let year in data){
            for(let month in data[year]){
                for(let day in data[year][month]){
                    let days_mood = data[year][month][day]
                    total_number_of_days++
                    sum_moods += days_mood
                }
            }
        }
        return {num_days: total_number_of_days, average_mood: sum_moods / total_number_of_days}
    }

    interface Statuses {
        num_days: number;
        average_mood: string | number;
        time_remaining: string;
    }

    const statuses: Statuses = {
        ...countValues(),
        time_remaining: `${23 - now.getHours()}H ${60 - now.getMinutes()}M`
    };
    
    async function handleSetMood (mood){
        const day = now.getDate()
        const month = now.getMonth()
        const year = now.getFullYear()
        try {
            const newData = {...userDataObj}
            if(!newData?.[year]){
                newData[year] = {}
            }
            if(!newData?.[year]?.[month]){
                newData[year][month] = {}
            }
            
            newData[year][month][day] = mood
            
            // Update the current state
            setData(newData)
            // Update the global state
            setUserDataObj(newData)
            // Update firebase
            const docRef = doc(db, 'users', currentUser.uid)
            const res = await setDoc(docRef, {
                [year]: {
                    [month]: {
                        [day]: mood
                    }
                }
            }, {merge: true})
        } catch (error) {
            console.log('Failed to set data: ', error.message);
        }
    }

    interface Moods {
        '&*@#$': string
        'Sad': string
        'Existing': string
        'Good': string
        'Elated': string
    }

    const moods = {
        '&*@#$': '😭',
        'Sad': '🥲',
        'Existing': '😶',
        'Good': '😊',
        'Elated': '😍',
    }

    useEffect(() => {
        if(!currentUser || !userDataObj){
            return
        }

        setData(userDataObj)
    }, [currentUser, userDataObj])

    if(loading){
        return <Loading />
    }

    if(!currentUser){
        return <Login />
    }

    return (
        <div className="flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg">
                {Object.keys(statuses).map((status, statusIndex) => {
                    const typedStatus = status as keyof Statuses;
                    return (
                        <div key={statusIndex} className="p-4 flex flex-col gap-1 sm:gap-2">
                            <p className="font-medium capitalize text-xs sm:text-sm truncate">{typedStatus.replaceAll('_', ' ')}</p>
                            <p className="text-base sm:text-lg">{statuses[typedStatus]} {typedStatus === 'num_days' ? '🔥' : ''}</p>
                        </div>
                    )
                })}
            </div>
            <h4 className="text-5xl sm:text-6xl md:text-7xl text-center">
                How do you <span className="textGradient">feel</span> today?
            </h4>
            <div className="flex items-stretch flex-wrap gap-4">
                {Object.keys(moods).map((mood, moodIndex) => {
                    const typedMood = mood as keyof Moods
                    return (
                        <button onClick={() => {
                            const currentMoodValue = moodIndex + 1
                            handleSetMood(currentMoodValue)
                        }} className={'p-4 px-5 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1 '} key={moodIndex}>
                            <p className='text-4xl sm:text-5xl md:text-6xl'>{moods[typedMood]}</p>
                            <p className='text-indigo-500 text-xs sm:text-sm md:text-base'>{mood}</p>
                        </button>
                    )
                })}
            </div>
            <Calendar completeData={data} handleSetMood={handleSetMood} />
        </div>
    );
}
 
export default Dashboard;