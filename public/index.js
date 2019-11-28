filebtn.addEventListener("change",function(e){


        for(let i = 0; i< e.target.files.length; i++){

            let imagefile = e.target.files[i];

            let storageref = firebase.storage().ref("images/"+ imagefile.name);

            let task = storageref.put(imagefile);


            task.on("state_changed",function progress(snapshot){
                

                let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;

                console.log("Upload file "+ percentage + " done");

                    
            })

        }
})