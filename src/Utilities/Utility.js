const getStoredData = (listName) => {
    const storedData = localStorage.getItem(listName)

    if(storedData) {
        const convertData = JSON.parse(storedData)
        return convertData
    }
    else {
        return []
    }
}

const addItemToLS = (listName, id) => {
    const storedData = getStoredData(listName)
    const existInLs = storedData.includes(id)

    if(existInLs) { 
        alert('achi re vai achi') 
        return
    } 
    else { 
        const updatedData = [...storedData, id]
        const convertData = JSON.stringify(updatedData)
        localStorage.setItem(listName, convertData)
    }
}

const removeItemFromLs = (listName, id) => {
    const storedData = getStoredData(listName)
    const removedItem = storedData.filter(str => str != id)
    const filterdIds = JSON.stringify(removedItem)
    localStorage.setItem(listName, filterdIds)
}

export { addItemToLS, getStoredData, removeItemFromLs }

