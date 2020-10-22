const caeserCipher = (data) => {

    const checkString = () => {

        let check = typeof data;
        if (check == "string") {
            return true;
        } else {
            return false;
        }

    };

    const assignPosition = () => {

        let alphabets ='abcdefghijklmnopqrstuvwxyz';
        let arr = [];

        for (let i = 0; i < alphabets.length; i++) {
            arr.push(alphabets[i]);
        };

        for (let j = 0; j < arr.length; j++) {

            for (let k = 1; k < arr.length; k++) {
            
               console.log(arr[j] + k)

            };
            
        };




    


    };


    const encrypt = () => {

    }

    const decrypt = () => {

    }


    return {
        encrypt,
        decrypt
    };

}