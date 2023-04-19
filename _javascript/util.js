const classOfElements = {
    add(className, ...elements){
        for (const element of elements){
            const inspector = element.length
            inspector !== undefined ?  scanCollectionFound.add(className, element) : element.classList.add(className)
        }
    },

    remove(className, ...elements){
        for (const element of elements){
            const inspector = element.length
            inspector !== undefined ? scanCollectionFound.remove(className, element) : element.classList.remove(className)
        }
    },

    toggle(className, ...elements){
        for (const element of elements){
            const inspector = element.length
            inspector !== undefined ? scanCollectionFound.toggle(className, element) : element.classList.toggle(className)
        }
    }

}

const scanCollectionFound = {
    add(className, elements){
        for (const element of elements) {
            element.classList.add(className);  
        } 
    },
    remove(className, elements){
        for (const element of elements) {
            element.classList.remove(className);    
        }   
    },
    toggle(className, elements){
        for (const element of elements) {
            element.classList.toggle(className);   
        }  
    }
}

export default classOfElements 