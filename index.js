
// 1 -----------

function splitMessage(message ,delimiter ) {
    const arr  = message.split()
    return arr
    
    }
    
    const b  = splitMessage('a love javascript' , ' ')
    console.log(b)
    
    // 2 -----------
    
    function makeStringFromArray(array ,delimiter ) {
        const string  = array.join(delimiter)
        return string
        
        }
        
        const c  = makeStringFromArray(['js' , 'is' , 'cool' , ] , ' ')
        console.log(c)
        
    
        // 3 ----------
    
        function checkFruit(fruit) {
            const arr = ['apple' , 'pear' , 'fig' , 'orange']
          const fruct =   arr.includes(fruit)
    
          return fruct
        }
    
        const g =  checkFruit('apple')
    console.log(g)