import React, { useEffect, useState } from 'react';
import MyButton from '../UI/button/MyButton';

const DragonsLocalStorage = ({post}) => {
    const [name, setName] = useState('Add to favorites')
    const keyName = 'dragons'

    useEffect(() => {
        setName(window.localStorage.getItem('name'))
    }, [])
    useEffect(() => {
        window.localStorage.setItem('name', name)
    }, [name])

    const getDragons = () => {
        const dragonsLocalStorage = localStorage.getItem(keyName)
        if(dragonsLocalStorage !== null) {
            return JSON.parse(dragonsLocalStorage)
        }
        return []
    }

    const putDragons = (id) => {
        let dragons = getDragons()
        let pushDragon = false
        const index = dragons.indexOf(id)

        if(index === -1) {
            dragons.push(id)  
            pushDragon = true  
            setName('Remove from favorites')
        } else {
            dragons.splice(index, 1)
            setName('Add to favorites')
        }
        localStorage.setItem(keyName, JSON.stringify(dragons))

        return {
            pushDragon,
            dragons
        }
    }

    function handleSetLocationStorage(id) {
        putDragons(id)
    }

    return (
        <div>
            <MyButton onClick={() => handleSetLocationStorage(post.id)}>{name}</MyButton> 
        </div>
    );
};

export default DragonsLocalStorage;